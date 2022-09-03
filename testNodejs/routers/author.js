const authorControllers = require("../controllers/authorcontrollers");
const {Author,Book} = require('../model/model');

const router = require("express").Router();

router.post("/", async function(req, res) {
    try{
        const newAuthor = new Author(req.body);
        const savedAuthor = await newAuthor.save();
        res.status(200).json(savedAuthor);

    }catch(err){
        res.status(500).json({err});
    }

});
// router.get("/", (req, res)=>{
//     res.send("haha")
// })

router.get("/", async function (req, res) {
    try{
        const authors = await Author.find();// find tim tat ca author trong Author
        res.status(200).json(authors);
    }catch(err){
        res.status(500).json({err});
    } 
})


router.get('/:id',  async (req, res)  => {
    try{
        const author = await Author.findById(req.params.id).populate("books");// find tim 1 author trong Author
        res.status(200).json(author);
    }catch(err){
        res.status(500).json({err});
    } 
}
);

// router.put('/:id', authorControllers.updateAuthor);
router.put('/:id',  async function (req, res) {
    try{
        const author = await Author.findById(req.params.id);// find tim 1 author trong Author
        await author.updateOne({$set:req.body});
        res.status(200).json("Update successful");
    }catch(err){
        res.status(500).json({err});
    } 
} )

router.delete("/:id",async (req, res) => {
    try{
        await Book.updateMany(
            {author: req.params.id},
            {author: null});
        await Author.findByIdAndDelete(req.params.id);
    
        res.status(200).json("delete successful");
    }catch(err){
        res.status(500).json({err});
    } 
})
module.exports = router;