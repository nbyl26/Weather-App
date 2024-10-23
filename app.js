document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim();
    const apiKey = 'c2413a21c039d2d44d48d488d926ab2b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.cod === 200) {
                document.getElementById('city-name').innerText = `Weather in ${data.name}`;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `${data.weather[0].description}`;

                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
                const weatherIcon = document.getElementById('weather-icon');
                weatherIcon.src = iconUrl;
                weatherIcon.style.display = 'block';  // Tampilkan ikon cuaca
            } else {
                document.getElementById('city-name').innerText = "City not found!";
                document.getElementById('temperature').innerText = "";
                document.getElementById('description').innerText = "";
                document.getElementById('weather-icon').style.display = 'none'; // Sembunyikan ikon jika tidak ditemukan
            }
        })
        .catch(error => console.log(error));
});
