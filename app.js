const { crearArchivo } = require('./helpers/mutiplicar');
require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'.random))
    .catch( err => console.log(err));

