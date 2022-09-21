//auth đảm nhiệm việc đăng ký và đăng nhập
const maintControllers = require("../controllers/maintControllers")


const router = require('express').Router();
const bcrypt = require('bcrypt');

// gọi đến MVC ở controller
router.post('/registermain', maintControllers.registermain);




module.exports = router;