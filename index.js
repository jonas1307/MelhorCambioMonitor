const cron = require('node-cron');
const fs = require('fs');
const got = require('got');
const url = 'https://www.melhorcambio.com/ws/chrome.php?M=euro&C=sao-paulo';
const filename = 'ctx.csv';
const header = 'DataCaptura,DataCotacao,HoraCotacao,ValorEspecie,ValorVtm\r\n';

console.log('Starting task...')

cron.schedule('0 */5 9-18 * * 1-5', () => {
    console.log('Executing');
    got.get(url, { json: true })
        .then((res) => {
            fs.exists(filename, (exists) => {
                if (!exists) fs.appendFile(filename, header, () => {});
                fs.appendFile(filename, `${date()},${res.body.dia},${res.body.hora},${res.body.especie},${res.body.vtm}\r\n`, () => {});
            });
        })
        .catch((err) => {
            console.error(err);
        });
});

function date() {
    const date = new Date(Date.now());
    var dd = zeroes(date.getDate());
    var mm = zeroes(date.getMonth() + 1);
    var yy = zeroes(date.getFullYear());
    var HH = zeroes(date.getHours());
    var MM = zeroes(date.getMinutes());
    return `${dd}/${mm}/${yy} ${HH}:${MM}`;
}

function zeroes(i) {
    if (i < 10){
        return `0${i}`;
    }
    return i;
}
