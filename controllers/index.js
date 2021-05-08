const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
const DogBreed = ('https://api.thedogapi.com/v1/images/search');
const { get } = require('./api');
const fetch = require("node-fetch");
router.use('/api', apiRoutes);

router.get("/homepage", (req, res) => {
    console.log("We in dis!!");
    //res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render('homepage', {layout: 'main'});
});

router.get('/api/randomdog', (req,res) =>{
    fetch(DogBreed)
.then(response => response.json())
.then(data => res.json(data));
})

router.get("/profile", (req, res) =>{
res.render('profile');
});

router.get("/favorite", (req, res) =>{
    res.render('favorite');
    });


router.get("/login", (req, res) =>{
    res.render('login');
});

module.exports = router;