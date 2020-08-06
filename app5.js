const argv = require('./config/yargsx').argv; //Extraer y asignar argv;
const colors = require('colors'); //Se debe importar en el archivo que se requiera

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
            //.then(archivo => console.log(`Archivo creado: ${archivo}`)) Sin color
            //.then(archivo => console.log(`Archivo creado: ${archivo.green}`)) uso de color 
            //.then(archivo => console.log(colors.green('Archivo creado: %s'), `${archivo}`)) uso de color
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}