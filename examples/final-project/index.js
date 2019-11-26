const axios = require('axios');

// API specific settings.
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = 'Your API Key Here';

const LOCATION_ZIP_CODE = '90001';
const COUNTRY_CODE = 'us';

const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;

axios.get(ENTIRE_API_URL)
    .then(response => {
        // Getting the current temperature and the city from the response object.
        const kelvinTemperature = response.data.main.temp;
        const cityName = response.data.name;
        const countryName = response.data.sys.country;

        // Making K to F and K to C conversions.
        const fahrenheitTemperature = (kelvinTemperature * 9/5) — 459.67;
        const celciusTemperature = kelvinTemperature — 273.15;

        // Building the final message.
        const message = (
            `Right now, in \
            ${cityName}, ${countryName} the current temperature is \
            ${fahrenheitTemperature.toFixed(2)} deg F or \
            ${celciusTemperature.toFixed(2)} deg C.`.replace(/\s+/g, ' ')
        );

        console.log(message);
    })
    .catch(error => console.log('Error', error));