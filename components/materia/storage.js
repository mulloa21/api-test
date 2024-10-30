const model = require('./model')

async function insertar_materia(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_materia(dato) {
     let filter = {}

     if (dato.nombre) {
        filter = { nombre: dato.nombre }
     }
     
     const resultado = await model.find( filter )
     return resultado
}

async function actualizar_materia(id, dato) {
    const resultado = await model.findByIdAndUpdate(id, dato, { new: true });
    return resultado;
}

async function eliminar_materia(id) {
    const resultado = await model.findByIdAndDelete(id);
    return resultado;
}

module.exports = {
    insertar:insertar_materia,
    obtener:obtener_materia,
    actualizar:actualizar_materia,
    eliminar: eliminar_materia
}