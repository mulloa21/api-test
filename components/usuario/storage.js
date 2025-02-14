const model = require('./model')

async function insertar_usuario(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_usuario(dato) {
     let filter = {}

     if (dato.apellido) {
        filter = { apellido: dato.apellido }
     }
     
     const resultado = await model.find( filter ).select('-password'); //Excluir contraseña
     return resultado
}

async function login_usuario(dato) {
     let filter = {}

     if (dato.username && dato.password) {
        filter = { username: dato.username, password:dato.password }
     }

     const resultado = await model.find( filter ).select('-password'); //Excluir contraseña
     return resultado
}

async function actualizar_usuario(id, dato) {
    const resultado = await model.findByIdAndUpdate(id, dato, { new: true });
    return resultado;
}

async function eliminar_usuario(id) {
    const resultado = await model.findByIdAndDelete(id);
    return resultado;
}

module.exports = {
    insertar:insertar_usuario,
    obtener:obtener_usuario,
    actualizar:actualizar_usuario,
    eliminar: eliminar_usuario
}