const authorController = require('../controller/authorController')
const router = require('express').Router();

//Add author
router.post('/',authorController.addAuthor);
// get all author
router.get('/',authorController.getAllAuthor);

module.exports = router;