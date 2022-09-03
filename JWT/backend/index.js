const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routers 
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

mongoose.connect("mongodb://localhost:27017/learnJWT", (err) => {
    if(!err) console.log('database connected');
    else console.log('database disconnected')
})
/*
//authentication(ss ng dung tren dATabasse)
//authentization(ban co quyen lam gi)

*/

//JWT xac thuc nguoi dung



app.listen(8000,() => {
    console.log('server is running on port');
})