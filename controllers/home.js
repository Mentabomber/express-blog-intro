const express = require("express");
const fs = require("fs");
const path = require("path");

// function index (req, res) {
//     res.format({
//         html: () => {
//             let htmlContent = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8"); 
//         }
//     })
// }

function index(req, res) {
    res.send("<h1>Benvenuti nel mio blog!</h1>");
  }


  module.exports = {
    index
  }