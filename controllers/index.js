const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
const DogBreed = ('https://api.thedogapi.com/v1/images/search');
const { get } = require('./api');
const fetch = require("node-fetch");
router.use('/api', apiRoutes);
router.get("/", (req, res) => {
    console.log("We in dis!!");
    //res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render('homepage', {layout: 'main'});
});

router.get('/api/randomdog', (req,res) =>{
    fetch(DogBreed)
.then(response => response.json())
.then(data => res.json(data));
})
// router.get("/account", (req, res) =>{
//     res.render('account');
// });



router.get("/login", (req, res) =>{
    res.render('login');
});

module.exports = router;