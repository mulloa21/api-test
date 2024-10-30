const express = require('express');
const authController = require('./authController');

const router = express.Router();

// Define the login route
router.post('/login', authController.login);

// Define the register route if needed
router.post('/register', authController.register);

module.exports = router;