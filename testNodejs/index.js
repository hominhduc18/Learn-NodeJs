const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const authorRoute = require("./routers/author");//ten tu dat
const bookRoute = require("./routers/book");
/*
dotenv.config();

mongoose.connect((process.env.MONGODB_URL), (err) => {
    if(!err) console.log('database connected');
    else console.log('database disconnected')
})
*/
mongoose.connect("mongodb://localhost:27017/MyTest", (err) => {
    if(!err) console.log('database connected');
    else console.log('database disconnected')
})

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(8000, () =>{
    console.log('server is running...');
});