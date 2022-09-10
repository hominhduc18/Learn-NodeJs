//auth đảm nhiệm việc đăng ký và đăng nhập
const authController = require("../controllers/authControllers")


const router = require('express').Router();
const bcrypt = require('bcrypt');

// gọi đến MVC ở controller
router.post('/register', authController.registerUser);





module.exports = router;