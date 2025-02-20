
function getWeather() {
    const latitude = 52.52;  
    const longitude = 13.405; 
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=weathercode`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let x= document.getElementById("weather-container")
            x.style.display = "inline-block";
            const weatherCode = data.hourly.weathercode[0];
            displayWeather(weatherCode);
            changeBackground(weatherCode);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Error fetching weather data");
        });
}


function displayWeather(weatherCode) {
    const weatherDetails = document.getElementById('weather-details');
    let weatherDescription;

    switch (weatherCode) {
        case 0:
            weatherDescription = "Clear sky";
            break;
        case 1:
        case 2:
        case 3:
            weatherDescription = "Partly cloudy";
            break;
        case 51:
        case 53:
        case 55:
            weatherDescription = "Drizzle";
            break;
        case 61:
        case 63:
        case 65:
            weatherDescription = "Rain";
            break;
        case 71:
        case 73:
        case 75:
            weatherDescription = "Snow";
            break;
        default:
            weatherDescription = "Unknown weather";
            break;
    }

    weatherDetails.innerHTML = `<strong>Weather:</strong> ${weatherDescription}`;
}


function changeBackground(weatherCode) {
    let backgroundColor;

    switch (weatherCode) {
        case 0:
            backgroundColor = '#87CEEB';  // Sky Blue (Clear Sky)
            break;
        case 1:
        case 2:
        case 3:
            backgroundColor = '#B0BEC5';  // Light Grey (Partly Cloudy)
            break;
        case 51:
        case 53:
        case 55:
            backgroundColor = '#4FC3F7';  // Light Blue (Drizzle)
            break;
        case 61:
        case 63:
        case 65:
            backgroundColor = '#1E3A8A';  // Dark Blue (Rain)
            break;
        case 71:
        case 73:
        case 75:
            backgroundColor = '#FFFFFF';  
            break;
        default:
            backgroundColor = '#87CEEB';  
            break;
    }

    document.body.style.backgroundColor = backgroundColor;
}
