const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


let refreshToken = [];

const authControllers ={
    registerUser: async(req, res) => {
        try{
            const salt =await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            //create user
            const newUser = await newUser({
                username: req.body.username,
                email: req.body.email,
                password: req.body.hashed,
            });
            //save to datbase
            const user = await newUser.save();
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    }, 

    //Generate acess token 
    generateAcessToken: (user) =>{
        return jwt.sign({
            id: user.id,
            admin: user.admin,
        },
        process.env.JWT_ACCESS_KEY,//token dau ma ben env ,ngan han
        { expiresIn: "30s"}//sau 30s ko dung dc ma token nua
        );
    },


    //Generate refresh token 
    generaterefreshToken: (user) =>{
        return jwt.sign({
            id: user.id,
            admin: user.admin,
        },
        process.env.JWT_refresh_token,//token dau ma ben env ,ngan han
        { expiresIn: "365d"}
        );
    },




    //login user

    loginUser: async(req, res) => {
        try {
            const user = await User.findOne({username: req.body.username});
            if(!user){
                 return res.status(404).json("wrong username");
            }
            const validPassword = await bcrypt.compare(//ss passs
                req.body.password,//pass nhap vao
                user.password);//ss pass user
            if(!validPassword){
                return res.status(404).json("wrong password");
            }
            if(user && validPassword){
                // const accessToken = jwt.sign({
                //     id: user.id,
                //     admin: user.admin,
                // },
                // process.env.JWT_ACCESS_KEY,//token dau ma ben env ,ngan han
                // { expiresIn: "30s"}//sau 30s ko dung dc ma token nua
                // );
                
                // const refreshToken = jwt.sign({
                //     id: user.id,
                //     admin: user.admin,
                // },
                // process.env.JWT_refresh_token,//token dau ma ben env ,ngan han
                // { expiresIn: "365d"}
                // )




                    const accessToken = authControllers.generateAcessToken(user);
                    const refreshToken = authControllers.generateAcessToken(user);
                   // luu token vao cookie
                    res.cookie("refreshToken",refreshToken,{
                        httpOnly: true,
                        secure: false,
                        path: "/",
                        sameSite: "strict"
                    })

            
                const {password,...other} = user._doc;// khong muon tra ve password dung ...other

                res.status(200).json({...other,accessToken,accessToken});
            }

        }catch(err){
            res.status(500).json(err);
        }

    },
    requestrefeshToken: async function(req, res){
        // lay refresh token tru user (lau dai ko het han)
        const refreshToken = req.cookie.refreshToken;
        if(!refreshToken) return res.status(403).json("You're not authenticated");
        if(!refreshToken.includes(refreshToken)) return res.status(403).json("Refresh token is not valid!");
        // tao token va refresh moi
        jwt.verify(refreshToken,process.env.JWT_ACCESS_KEY, (err,user) => {
            if(err){
                console.log(err);
            }
            refreshToken = refreshToken.filter((token) => token !== refreshToken);
        
            const newAcessToken = authControllers.generateAcessToken(user);
            const newrefreshToken = authControllers.generaterefreshToken(user);
            refreshToken.push(newrefreshToken);//nhu lua vao
            res.cookie("newrefreshToken", newrefreshToken,{
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            });
            res.status(200).json({accessToken: newAcessToken});

        })
        
    },
    userLogout: async(req, res) => {
        //refresh bien mat
        res.clearCookie('refreshToken');
        refreshToken = refreshToken.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("Logout successful");
    }
}
// store token: luu tru token
// 1) local storage: de bi tan cong boi xss
// 2) httponly Cookies: it bi anh huong 
// 3) Redux store de luu accesstoke
    // dung httponly cookie de luu refresh token



module.exports = authControllers;