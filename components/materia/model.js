const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const materia_schema = new schema({
    nombre: req_string,
    creditos: req_string,
    fecha_registro: Date,
    fecha_actualizacion: Date,
}, {
    timestamps: { createdAt: 'fecha_registro', updatedAt: 'fecha_actualizacion' }
})

const model = mongoose.model('Materia', materia_schema)
module.exports = model