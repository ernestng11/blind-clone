const express = require("express");

//const connectDB = require('./config/db');
//const path = require('path');
//init app variable
const app = express();

app.get("/", (req, res) => res.send("API Running"));
// look for env var called PORT for deployment into heroku - 5000 for local
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
