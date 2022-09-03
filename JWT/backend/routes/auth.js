const router = require('express').Router();
const authController = require('../controllers/authControllers');
const bcrypt = require('bcrypt');

router.post('/register', authController.registerUser);

router.post('/login', authController.loginUser);



//refresh tokens

router.post('/refresh', authController.requestrefeshToken);


router.post('/logout', authController.userLogout);



module.exports = router;