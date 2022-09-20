//auth đảm nhiệm việc đăng ký và đăng nhập
const EmpController = require("../controllers/empControllers")


const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Router } = require("express");

// gọi đến MVC ở controller
router.post('/empregister', EmpController.registerEmp);




module.exports = router;