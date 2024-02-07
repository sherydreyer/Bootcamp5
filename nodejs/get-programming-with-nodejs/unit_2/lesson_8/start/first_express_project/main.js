"use strict";
const port = 3000,
    express = require("express"),
    app = express();
app.get("/", (req, res) => {

    console.log("params");
    console.log(req.body);
    console.log("url: ");
    console.log(req.url);
    console.log("query string");
    console.log( req.query);
    res.send("Hello, Universe!");
})
    .use((req, res, next) => {
        console.log(`request made to: ${req.url}`);
        next();
    })
    .get("/items/:vegetable", (req, res) => {
        res.send(req.params.vegetable);
    })
    .use(
        express.urlencoded({
            extended: false
        })
    )
    .use(express.json())
    .post("/", (req, res) => {
        console.log(req.body);
        console.log(req.query);
        res.send("POST Successful!");
    })
    .post("/contact", (req, res) => {
        res.send("Contact information submitted successfully.");
    })
    .listen(port, () => {
        console.log(`The Express.js server has started and is listening on port number: ${port}`);
    });
