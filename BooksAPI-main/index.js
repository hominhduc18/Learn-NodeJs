//import packages
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
let bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRouter = require("./routes/author");
const bookRouter = require("./routes/book");
dotenv.config()
const port = 3333;
//connect Database

mongoose.connect(
  (process.env.MONGODB_URL),
  () => {
    console.log("Connected to MongoDB");
  }
);
//code app
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan());
app.use("/v1/author", authorRouter)
app.use("/v1/book", bookRouter)
app.get("/", (req, res) => {
  res.send("home");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
