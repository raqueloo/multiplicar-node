//Paquete yargs que está en los módulos de node
//comando y ayuda para el usuario y un objeto que contiene parámetros
const argv = require('yargs')
    .command('Listar', 'Imprime en consola la tabla de multiplicar')
    .command('Crear', 'genera en consola la tabla de multiplicar')
    .option('base', { alias: 'b', demand: true })
    .option('limite', { alias: 'l', default: 10 })
    .demandOption('base', 'La opción es obligatoria')
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //Importar las dos funciones


console.log(argv);
let comando = argv._[0]; //Obtiene el comando de argv

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}