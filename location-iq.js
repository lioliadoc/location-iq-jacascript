const axios = require('axios');
require('dotenv').config();

const LOCATIONIQ_KEY = process.env['api_key'];
console.log(LOCATIONIQ_KEY);

const findLatitudeAndLongitude = (query) => {
    let latitude, longitude;
    axios.get('https://us1.locationiq.com/v1/search.php',
    {
        params: {
            key: LOCATIONIQ_KEY,
            q: query,
            format: 'json'
        }
    })
    .then((response) => {
        latitude = response.data[0].lat;
        longitude = response.data[0].lon;
        console.log(latitude, longitude);
    })
    .catch ((error) => {
        console.log('error');
    });
 
}

const longLat = findLatitudeAndLongitude ('Machu Picchu')