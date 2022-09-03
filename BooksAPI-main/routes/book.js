const bookController = require('../controller/bookController');
const router = require('express').Router();

//Add book
router.post('/',bookController.addBook);

//Get all books
router.get('/',bookController.getAllBook);

module.exports = router;