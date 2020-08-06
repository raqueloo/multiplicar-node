//Paquete yargs que está en los módulos de node
//comando y ayuda para el usuario y un objeto que contiene parámetros
const argv = require('yargs')
    .command('Listar', 'Imprime en consola la tabla de multiplicar')
    .option('base', { alias: 'b', demand: true })
    .option('limite', { alias: 'l', default: 10 })
    .demandOption('base', 'La opción es obligatoria')
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
let argv2 = process.argv;

console.log(argv);
console.log(argv.base);
console.log(argv.limite);


crearArchivo(argv.base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));