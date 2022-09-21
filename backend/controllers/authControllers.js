// đảm nhiệm mọi chức năng nhiệm vụ của file auth trong thư mục Router

const User = require('../models/User');
const bcrypt = require('bcrypt');


// let refreshToken = [];

const authControllers ={
    registerUser: async(req, res) => {
        try{
            console.log(req.body);         
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            // console.log(salt);
            //tạo user mới trong database user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                phone: req.body.phone,
                sex: req.body.sex,
            });
            //lưu user vào database
            const user = await newUser.save();
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
            console.log(err);
            
        }
    }, 
    
    getAllUsers: async(req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);  
        } catch (error) {
            res.status(500).json(error);
            console.log(error); 
        }
    },


    deleteUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json("Delete Successful");  
            
        } catch (error) {
            res.status(500).json(error);
            console.log(error);    
        }
    },


    // putUser: async(req, res) => {
    //     try {
            
    //     } catch (error) {
    //         res.status(500).json(error);
    //         console.log(error); 
            
    //     }
    // }


















};



module.exports = authControllers;