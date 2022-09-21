const mongoose = require('mongoose');

const subDoc = new mongoose.Schema({ "$id": String, "$ref": String, "$db": String });

const maintenanceSchema = new mongoose.Schema({
    // date:{
    //     type: String,
    //     required: true,
    //     minLength: 1,
    //     maxLength: 25,  
    // },
    User: subDoc,

    employee: subDoc,

    description:{
        type: Number,
        minLength:1,
        maxLength:12,
        required: true
    },
 
    // history: {
    //     start: {
    //         type: String,
    //         required: true,
    //         minLength: 5,
    //         maxLength: 20,
    //     },
    //     comment: {
    //         type: String,
    //         required: true,
    //         minLength: 5,
    //         maxLength: 20,
    //     }

    // },

   
},
// thời gian update
{timestamps: true}
);


module.exports = mongoose.model('Maintenance',maintenanceSchema );
