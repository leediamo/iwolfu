const router = require('express').Router();
//const apiRoutes = require('./api');
const path = require('path');
const DogBreed = ('https://dog.ceo/api/breeds/list/all');
//const { get } = require('./controllers/api');
const fetch = require("node-fetch");
const UserRoutes = require('./api/userRoutes');



router.use('/api', UserRoutes);

router.get("/", (req, res) => {
    console.log("We in dis!!");
    res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render('homepage', {layout: 'main'});
});

// router.get("/account", (req, res) =>{
//     res.render('account');
// });

router.get("/login", (req, res) =>{
    res.render('login');
});

module.exports = router;


fetch('')
