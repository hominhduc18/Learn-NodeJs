const {Author,Book} = require('../model/model');

class authorControllers  {
    async addAuthor(req, res) {
        try{
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(savedAuthor);

        }catch(err){
            res.status(500).json({err});
        }

    }
};
class getAllAuthors {
    async getAllAuthors(req, res) {
        try{
            const authors = await Author.find();// find tim tat ca author trong Author
            res.status(200).json(authors);
        }catch(err){
            res.status(500).json({err});
        } 
    }
};
class getAnAuthors {
    async getAnAuthors(req, res) {
        try{
            const author = await Author.findById(req.params.id).populate("books");// find tim 1 author trong Author
            res.status(200).json(author);
        }catch(err){
            res.status(500).json({err});
        } 
    }
};
class updateAuthor {
    async updateAuthor(req, res) {
        try{
            const author = await Author.findById(req.params.id);// find tim 1 author trong Author
            await author.updateOne({$set:req.body});
            res.status(200).json("Update successful");
        }catch(err){
            res.status(500).json({err});
        } 
    }
};
class deleteAuthor {
    async deleteAuthor(req, res) {
        try{
            await Book.updateMany(
                {author: req.params.id},
                {author: null});
            await Author.findByIdAndDelete(req.params.id);
        
            res.status(200).json("delete successful");
        }catch(err){
            res.status(500).json({err});
        } 
    }
};




module.export = new authorControllers;
