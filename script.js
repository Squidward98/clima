document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "bdbeb2bbcf23939d82fabc7f29aa1f6c"; // Reemplaza 'TU_API_KEY' con tu propia API key de OpenWeatherMap

    // Obtener el pronóstico del tiempo
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&lang=es&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h2>Pronóstico actual para ${data.name}</h2>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Descripción: ${data.weather[0].description}</p>
                <p>Humedad: ${data.main.humidity}%</p>
                <p>Viento: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error al obtener el pronóstico del tiempo:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<h2>Lo sentimos, no se pudo cargar el pronóstico del tiempo en este momento.</h2>`;
        });
});
