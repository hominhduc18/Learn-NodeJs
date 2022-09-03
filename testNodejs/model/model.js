const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    year:{
        type: 'number',
        required: true
    },
    books: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }
})
const  bookSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    publishedData:{
        type: 'string',
    },
    genres:{
        type: [String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,//lay id
        ref: 'Author'// lien ket lai 
    },
});

let Book = mongoose.model('Book', bookSchema);
let Author = mongoose.model('Author', authorSchema);
module.exports = {Book, Author};