const employee = require('../models/employee');
const bcrypt = require('bcrypt');

const empControllers ={
    registerEmp: async(req, res) => {
        try{
            console.log(req.body);         
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const newEmp = await new employee({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                phone: req.body.phone,
                sex: req.body.sex,
            });
            const user = await newEmp.save();
            res.status(200).json(user);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }, 
}

module.exports = empControllers;