const express = require("express");
const dotenv = require("dotenv");
const home = require("./controllers/home");

dotenv.config();

const port = process.env.PORT || 3001;

const app = express();


app.use(express.static("public"));


app.get("/", home.index);


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});

