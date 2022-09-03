const {Book,Author} = require('../model/model');

const bookController = {
    //add book
    addBook: async (req, res) => {
        try {
            const book = new Book(req.body);
            const saveBook = await book.save();//save vao data
            if(req.body.author){
                const author = Author.find({_id: req.body.author});
                // const author = Author.findById({req.body.author});// 2 dong như nhau
                author.updateOne({$push: {books: saveBook._id}}); // update tac gia them id vao book cua tac gia 
            }   
            res.status(200).json(saveBook);
        }catch(err) {
            res.status(500).json(err);
        }

    },
    getallBook: async (req, res) => {
        try {
           const allBook = await Book.find();
            res.status(200).json(allBook);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    //get a book
    getABook: async (req, res) => {
        try {
           const book = await book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    updateBook: async (req, res) => {
        try {
           const book = await book.findById(req.params.id);//tim sach
           await book.updateOne({$set: req.body});
            res.status(200).json("Update successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },
    deleteBook: async function(req, res) {
        try {
            await Author.updateMany(
                {books: req.params.id},
                {$pull: { books: req.params.id}});// theo models
            await Book.findByIdAndDelete(req.params.id);
             res.status(200).json("Delete successfully");
         }catch(err) {
             res.status(500).json(err);
         }
    }
};



module.exports = bookController;