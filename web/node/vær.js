const https = require('https');

const options = {
    hostname: 'api.met.no',
    path: '/weatherapi/locationforecast/2.0/compact?lat=48.85&lon=2.35',
    method: 'GET',
    headers: {
        'User-Agent': 'nodejs-test' // Legg til en unik brukeragent
    }
};

// Utfør HTTPS-forespørsel med definerte options
const request = https.request(options, (response) => {
    let data = '';

    // Lytt etter 'data' hendelser for å samle responsedata
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const weatherData = JSON.parse(data);
        console.log(weatherData.properties.timeseries[3].time);
        console.log(weatherData.properties.timeseries[3].data.instant.details);
    });
});

// Håndtere feil i HTTPS-forespørsel
request.on('error', (error) => {
    console.error(`Feil ved HTTPS-forespørsel: ${error.message}`);
});

// Send forespørselen
request.end();