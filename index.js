// const weatherData ={
//     "location": {
//     "name": "Milan",
//     "region": "Lombardia",
//     "country": "Italy",
//     "lat": 45.47,
//     "lon": 9.2,
//     "tz_id": "Europe/Rome",
//     "localtime_epoch": 1689495699,
//     "localtime": "2023-07-16 10:21"
//     },
//     "current": {
//     "last_updated_epoch": 1689495300,
//     "last_updated": "2023-07-16 10:15",
//     "temp_c": 28,
//     "temp_f": 82.4,
//     "is_day": 1,
//     "condition": {
//     "text": "Sunny",
//     "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
//     "code": 1000
//     },
//     "wind_mph": 2.2,
//     "wind_kph": 3.6,
//     "wind_degree": 202,
//     "wind_dir": "SSW",
//     "pressure_mb": 1015,
//     "pressure_in": 29.97,
//     "precip_mm": 0,
//     "precip_in": 0,
//     "humidity": 62,
//     "cloud": 0,
//     "feelslike_c": 30.4,
//     "feelslike_f": 86.7,
//     "vis_km": 10,
//     "vis_miles": 6,
//     "uv": 7,
//     "gust_mph": 3.8,
//     "gust_kph": 6.1
//     }
// };

const tempRef=document.querySelector('.temp');
const locationRef = document.querySelector('.time_location p');
const timeLocationRef = document.querySelector('.time_location span');
const imgRef= document.querySelector('.weather_condition p img');
const conditionRef= document.querySelector('.weather_condition span');


function renderWeatherData(weatherData) {
    tempRef.innerText=weatherData.current.temp_c;
    locationRef.innerText = weatherData.location.name;
    timeLocationRef.innerText = locationDetail(weatherData.current.last_updated, weatherData.current.is_day);
    conditionRef.innerText=weatherData.current.condition.text;
    imgRef.src =weatherData.current.condition.icon;
   
};
function locationDetail(time,day) {
    const timeArr=time.split(' ');
    const result = timeArr[1] + " " + day +timeArr[0];
    return result;
    
}


const formRef= document.querySelector('nav form');
formRef.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputRef=document.querySelector('input.searchField');
    const inputValue = inputRef.value;
    console.log(inputValue);
    weatherdata(inputValue);

});
function weatherdata(location){
    fetch(`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`)
    .then((res)=>res.json())
    .then((data) =>renderWeatherData(data))
    .catch((err)=>console.log('Error',err));
}