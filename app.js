const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

const getInfo = async(direccion) => {
    const lugarResp = await lugar.getLugarLatLng(direccion);
    const climaResp = await clima.getClima(lugarResp.lat, lugarResp.lng);
    return `El clima de ${direccion} es de ${climaResp}°`
}

getInfo(argv.direccion)
    .then(clima => console.log(clima))
    .catch(err => console.error(`No se pudo determinar el clima de ${argv.direccion}`));