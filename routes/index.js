//deconstructing package from express
const { Router } = require('express');
const path = require('path');
const app = Router();

//calling HTML (request,response)
app.get("/", (req, res) => {
    console.log("We in dis!!");
    res.sendFile(path.join(__dirname, "../views/index.html"));
})

module.exports = app