const fs = require('fs');
const { h } = require('../config/yargs');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        
        let salida = '';

        for(let i = 1; i <= hasta; i++) {
        salida += ( `${base} x ${i} = ${base*i}\n` );
        }

        if (listar === true) {
            console.log(`Tabla del ${base}`.underline.green);
            console.log(salida.rainbow);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`.random;
    } 
    catch (error) {
        throw error;
    }

}

module.exports = {
   crearArchivo   
}
