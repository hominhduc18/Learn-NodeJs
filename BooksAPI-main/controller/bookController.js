const { Book, Author } = require("../model/model");

const bookController = {
  addBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const saveBook = await newBook.save();
      if(req.body.author) {
        //const author = Author.find({_id: req.body.author}); //you can use the syntax like this
        const author = Author.findById(req.body.author);
        await author.updateOne({$push: {books: saveBook._id}})
      }
      res.status(200).json(saveBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllBook: async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error);
    }
  },
};

module.exports = bookController;
