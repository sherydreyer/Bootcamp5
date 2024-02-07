"use strict";

app.set("port", process.env.PORT || 3000);
 const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController");

app
  .get("/", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    res.send("Hello, Universe!");
  })
  .get("/items/:vegetable", homeController.sendReqParam)
  .listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });
