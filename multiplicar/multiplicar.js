// requireds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no se pudo listar');
            return;
        }
        let lista = '';
        for (let i = 1; i <= limite; i++) {
            lista += `${base}*${i} = ${base * i}\n`;
        }
        resolve(lista);


    });

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i+1} = ${ base * ( i+1 )}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}