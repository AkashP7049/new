//      //FETCH DATA FROM API

// fetch('https://dummyjson.com/users').then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
// })

// let apikey= '9f6290d6cda9a36a63755fadee71f83d'
// let city = 'Bhopal'
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then((res)=>{
//     return res.json()
// }).then((whether)=>{
//     console.log(whether);
    
// })



     // WEATHER API 

let inp=document.querySelector('input')
let btn=document.querySelector('button')
let weatherInfo=document.querySelector('h1')
btn.addEventListener('click',()=>{
    let city=inp.value

let apikey= '9f6290d6cda9a36a63755fadee71f83d'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then((res)=>{
    if(!res.ok){
        throw new Error ('City not found');
    }
    return res.json();
}).then((data)=>{
    displayWeather(data);
}).catch((error)=>{
   console.log('Error fetching weather data:',error);
   weatherInfo.innerHTML=  `<p>${error.message ||'failed to fetch weather data.'}</p>`;
   
});
});
function displayWeather(data) {
    weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
}