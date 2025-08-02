const express = require('express');
const { register, login } = require('../controllers/userController'); // ✅ importing functions

const router = express.Router();

router.post('/register', register); // ✅ register route
router.post('/login', login);       // ✅ login route

module.exports = router;
