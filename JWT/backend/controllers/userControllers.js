const User = require('../models/User');


const userController = {
    //get all users
    getAllUsers: async(req, res) =>{
        try {
            const user = await User.find();
            res.status(200).json(user);

        }catch(err){
            res.status(500).json(err);
        }
       
    },
    deleteUser: async(req, res) => {
        try {
            //v1/user/111 thay vi 11 thif rep veef 11
            const user = User.findById(req.params.id);//tim user theo id
            
            res.status(200).json("Delete successful");

        }catch(err){
            res.status(500).json(err);
        }
    }
}

module.exports = userController;