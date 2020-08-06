const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => { //Define valor por defecto limite=10
    console.log('-------------'.green);
    console.log(`---Tabla ${base}---`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`);
    }

}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolver, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es válido`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
        }
        fs.writeFile(`ArchivosTablas/tabla-${base}-al-${limite}.txt`, data, (err => {
            if (err)
                reject(err)
            else
                resolver(`tabla-${base}-al-${limite}.txt`);
        }));
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}