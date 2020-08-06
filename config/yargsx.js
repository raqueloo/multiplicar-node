//Paquete yargs que está en los módulos de node
//comando y ayuda para el usuario y un objeto que contiene parámetros
/*const opts={
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}*/
const argv = require('yargs')
    .command('Listar', 'Imprime en consola la tabla de multiplicar')
    .command('Crear', 'genera en consola la tabla de multiplicar')
    .option('base', { alias: 'b', demand: true })
    .option('limite', { alias: 'l', default: 10 })
    .demandOption('base', 'La opción es obligatoria')
    .help()
    .argv;

module.exports = { //Para poder utilizar este objeto argv en otro archivos se tiene que exportar
    argv
}