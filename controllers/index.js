const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
const DogBreed = ('https://dog.ceo/api/breeds/list/all');
const { get } = require('./api');
const fetch = require("node-fetch");
router.use('/api', apiRoutes);

router.get("/", (req, res) => {
    console.log("We in dis!!");
    //res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render('homepage', {layout: 'main'});
});

// router.get("/account", (req, res) =>{
//     res.render('account');
// });

fetch(DogBreed)
.then(response => response.json())
.then(data => console.log(data));

router.get("/login", (req, res) =>{
    res.render('login');
});


module.exports = router;


fetch('http://example.com/movies.json')
