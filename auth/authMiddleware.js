const jwt = require('jsonwebtoken');
const config = require('../config');

// Verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'No token provided' });

    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Unauthorized' });
        req.userId = decoded.id;
        req.userRol = decoded.rol;
        next();
    });
}

// Role-based access control
function authorizeRole(rol) {
    return (req, res, next) => {
        if (req.userRol !== rol) return res.status(403).json({ error: 'Forbidden' });
        next();
    };
}

module.exports = { verifyToken, authorizeRole };
