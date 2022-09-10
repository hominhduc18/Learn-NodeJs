const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const cookieParser = require('cookie-parser');
// khai báo các function ở controller đã được làm 

const authRoute = require('./Router/auth');
//const userRoute = require('./routes/user');


app.use(cors());
app.use(cookieParser());// tao va gắn cookie
app.use(express.json());// các rep đều dưới dang json

app.use(
    express.urlencoded({
        extended: true,
    }),
);

// Kết nối với mongoDB
mongoose.connect("mongodb://localhost:27017/DATN", (err) => {
    if(!err) console.log('database connected');
    else console.log('database disconnected')
})

// Router trong node js gọi lại từ các 
// khai báo thư viện tới thư mục Router sau đó gọi ra 



app.use("/user", authRoute);





app.listen(8000,() => {
    console.log('server is running on port');
})