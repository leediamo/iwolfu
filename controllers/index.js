const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');


router.use('/api', apiRoutes);

router.get("/", (req, res) => {
    console.log("We in dis!!");
    //res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render('main', {layout: 'index'});
});

module.exports = router;
