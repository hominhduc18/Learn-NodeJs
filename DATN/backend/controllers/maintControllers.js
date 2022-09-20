const  main= require('../models/maintenance');

const bcrypt = require('bcrypt');

const mainControllers ={
    registermain: async(req, res) => {
        try{
            console.log(req.body);         
            const newEmp = await new main({
            //    date: new Date(),
               User: req.body.User,
               employee: req.body.employee,
               description: req.body.description,
            });
            const user = await newEmp.save();
            res.status(200).json(user);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }, 
}

module.exports = mainControllers;