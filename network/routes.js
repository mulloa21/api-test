const usuario = require('../components/usuario/interface')
const materia = require('../components/materia/interface')
const authRoutes = require('../auth/authRoutes');
const authMiddleware = require('../auth/authMiddleware');

const routes = function( server ) {
    server.use('/usuario', authMiddleware.verifyToken, usuario)
    server.use('/materia', authMiddleware.verifyToken, materia)
    server.use('/auth', authRoutes)
}

module.exports = routes