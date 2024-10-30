const bcrypt = require('bcryptjs');
const storage = require('./storage')

async function insertar_usuario( dato ) {
    return new Promise( async (resolve, reject) => {
        if (!dato.nombre || !dato.apellido || !dato.username || !dato.password ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            try{
                dato.password = await bcrypt.hash(dato.password, 10);
                console.log(dato);
                console.log(dato.password);
                resolve( storage.insertar( dato ) )
            }catch( err ){
                reject('Error al registrar el usuario.');
            }
        }
    })
}

function obtener_usuario( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

function login_usuario( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

function actualizar_usuario(id, dato) {
    return new Promise((resolve, reject) => {
        if (!dato.nombre || !dato.apellido || !dato.username || !dato.password) {
            reject('Los datos se encuentran incompletos.');
        } else {
            resolve(storage.actualizar(id, dato));
        }
    });
}

function eliminar_usuario(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('No se proporcionó el ID del usuario.');
        } else {
            resolve(storage.eliminar(id));
        }
    });
}

module.exports = {
    insertar_usuario,
    obtener_usuario,
    login_usuario,
    actualizar_usuario,
    eliminar_usuario 
}