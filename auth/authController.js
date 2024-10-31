const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../components/usuario/model'); // Import your user model
const userController = require('../components/usuario/controller');
const config = require('../config'); // Assuming config.js has your JWT secret

async function register(req, res) {
console.log("INGRESAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    await userController.insertar_usuario(req);
}

// Login
async function login(req, res) {
    try {
        let pass = await bcrypt.hash(req.body.password, 10);
        req.body.password = pass;
        const user = await userController.login_usuario(req.body);
        console.log(user);
        //if (user && await bcrypt.compare(req.body.password, user.password)) {
        if(user){
            const token = jwt.sign(
                //{ id: user.id, rol: user.rol },
                { id: user.id, rol: "Administrador" },
                config.jwtSecret,
                { expiresIn: '1h' }
            );
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
    console.log(error);
        res.status(500).json({ error: 'Login failed' });
    }
}

module.exports = { register, login };