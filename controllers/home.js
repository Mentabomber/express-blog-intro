
const express = require("express");
const fs = require("fs");
const path = require("path");


function index(req, res) {

   res.format({
    text: () => {
      res.type("text").send("Hello World!");
    },
    html: () => {
      let htmlContent = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8");
      let headContent = fs.readFileSync(path.resolve(__dirname, "../head.html"), "utf-8");
      
      htmlContent = htmlContent.replace("@head", headContent);

      res.type("html").send(htmlContent);
    },
    json: () => {
      res.type("json").send({
        message: "Hello World!",
      });
    },
    default: () => {
      res.status(406).send("Not Acceptable");
    },
  })
}


  module.exports = {
    index
  }