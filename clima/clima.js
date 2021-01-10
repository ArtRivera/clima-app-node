const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2cf28d23a719745931f2be97c933b986&units=metric`)

    return resp.data.main.temp;
};


module.exports = {
    getClima
};