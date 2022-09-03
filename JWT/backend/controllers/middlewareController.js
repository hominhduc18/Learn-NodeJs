const jwt = require('jsonwebtoken')


const middlewareController = {
    // verifytoken:xac nhan phai Token do khong
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const  accessToken = token.split(" ")[1];//lay accesstoke
            innerWidth.verify(accessToken, process.env.JWT_ACCESS_KEY,(err,user) => {// doi chieu phai toke kko
                if (err) {
                    res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });

        }
        else {
            res.status(401),json("You're not authenticated");
        }
    },
    verifyTokenandAdminauth: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            if(req.user.id == req.params.id || req.user.admin){
                next();
            }
            else {
                res.status(403),json("You're not allowed to delete other");
            }
        })
    }
 }

 module.exports = middlewareController;