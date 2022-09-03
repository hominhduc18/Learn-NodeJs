const router = require("express").Router();
const userController = require("../controllers/userControllers");

//get all user

router.get('/',middlewareController.verifyToken, userController.getAllUsers);

router.delete('/:id',middlewareController.verifyTokenandAdminauth,userController.deleteUser);


module.exports = router;