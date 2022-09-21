const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 25,
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
    history: {
        experience: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 20,
        },
        start_avg: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 20,
        },
        maintenance_order: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 20,
        },

    },
},
// thời gian update
{timestamps: true}
);

module.exports = mongoose.model('employee',userSchema );
