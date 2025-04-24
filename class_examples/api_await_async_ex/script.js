

document.addEventListener('DOMContentLoaded', fetchArtData);

async function fetchArtData() {
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&units=metric&appid=bc0dffe988a5874f093f027fbf71411f`)

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        showData(data);
        
    }
    catch(error){
        console.error('Fetch error:', error);
    };
};

function showData(data){
    console.log(data);
    console.log(data.weather[0].description);
    //Create your front end here

    //convert temp from celcius to farenheit
    let temp_cel = data.main.temp;
    let temp_fah = (temp_cel * 9/5) + 32;

    //get the weather description and location
    let weather_desc = data.weather[0].description;
    let location = data.name;

    //get element in html and append data
    const weatherSection = document.getElementById('weatherSection');
    const weatherItem = document.createElement('div');

    weatherItem.innerHTML = `
        <hr>
        <ul>
        <li>The location is ${location}</li>
        <li>The forecast is ${weather_desc}</li>
        <li>The temperature in farenheit is ${temp_fah.toFixed(2)} degrees</li>
        <ul>
        <p> </p>
    `;

    weatherSection.appendChild(weatherItem);

}
