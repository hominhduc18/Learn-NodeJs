// đảm nhiệm mọi chức năng nhiệm vụ của file auth trong thư mục Router

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


let refreshToken = [];

const authControllers ={
    registerUser: async(req, res) => {
        
        try{
            const salt =await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            //tạo user mới trong database user
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                phone: req.body.phone,
                sex: req.body.sex,
            });
            //lưu user vào database
            const user = newUser.save();
            res.status(200).json(user);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }, 
}

module.exports = authControllers;