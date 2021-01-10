const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=2cf28d23a719745931f2be97c933b986`,
        // headers: { 'X-Custom-Header': 'foobar' }
    });

    try {
        const resp = await instance.get();
        const data = resp.data;
        const dir = data.name;
        const lat = data.coord.lat;
        const lng = data.coord.lon;

        return {
            dir,
            lat,
            lng
        }
    } catch (error) {
        throw new Error(error.response.data.message);
    }


}

module.exports = {
    getLugarLatLng
}