//auth đảm nhiệm việc đăng ký và đăng nhập
const authController = require("../controllers/authControllers")


const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Router } = require("express");

// gọi đến MVC ở controller
router.post('/register', authController.registerUser);

router.get('/getuser', authController.getAllUsers);


router.delete('/deleteUser/:id', authController. deleteUser);

module.exports = router;