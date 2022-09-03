const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 25,
        unique: true  // tao usser giong se bao loi vi da ton tai
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
    admin:{
        type: Boolean,//phai chu ko
        default: false,// bat ky user nao ban dau deu ko phai la admin
    },
},
{timestamps: true}// thoi gian update khi nao
);

let User = mongoose.model('User',userSchema );
module.exports = {User};