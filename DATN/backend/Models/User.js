const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 25,
        // unique thông báo nếu tạo tài khảo có cùng tên user
        unique: true  
    },
    email:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 25,
        unique: true 
    }, 
    password:{
        type: String,
        required: true,
        minLength: 6,
    },
    phone:{
        type: Number,
        minLength:1,
        maxLength:12,
        unique: true,
        required: true
    },
    sex:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 10,
    },

    admin:{
        type: Boolean,
        default: false,
    },
},
// thời gian update
{timestamps: true}
);




// let User = mongoose.model('User',userSchema );
module.exports = mongoose.model('User',userSchema );