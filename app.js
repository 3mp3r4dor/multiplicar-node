const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
var colors = require('colors');


// console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(lista => {
            console.log(lista);
        }).catch(error => {
            console.log(error);
        });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch(error => {
                console.log('aqui?' + error)
            });
        break;

    default:
        console.log('No reconocido');;
}
// let parametro = argv[2];
// let base = parametro.split('=')[1];