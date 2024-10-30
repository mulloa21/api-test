const storage = require('./storage')

function insertar_materia( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato.nombre || !dato.creditos ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_materia( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

function actualizar_materia(id, dato) {
    return new Promise((resolve, reject) => {
        if (!dato.nombre || !dato.creditos) {
            reject('Los datos se encuentran incompletos.');
        } else {
            resolve(storage.actualizar(id, dato));
        }
    });
}

function eliminar_materia(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('No se proporcionó el ID del usuario.');
        } else {
            resolve(storage.eliminar(id));
        }
    });
}

module.exports = {
    insertar_materia,
    obtener_materia,
    actualizar_materia,
    eliminar_materia
}