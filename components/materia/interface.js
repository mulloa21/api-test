const express = require('express')

const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

routes.post('/', function(req, res) {
    controller.insertar_materia( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 400) )
})

routes.get('/', function(req, res) {
    controller.obtener_materia( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 400) )
})

routes.put('/:id', function(req, res) {
    const materiaId = req.params.id; // Obtener el ID de la materia a actualizar
    controller.actualizar_materia(materiaId, req.body)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 400));
});

routes.delete('/:id', function(req, res) {
    const materiaId = req.params.id; // Obtener el ID de la materia a eliminar
    controller.eliminar_materia(userId)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 400));
});

module.exports = routes