//Libraries
const express = require('express');
const session = require('express-session');
const path = require('path')
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

//for mySQL
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//defines app
const app = express();

//staticly hosting our public folder/files(html, css & javascript)
app.use(express.static(path.join(__dirname, 'public')));

//where app is hosted
const PORT = process.env.PORT || 3000;

//go to controllers folder index.js
const router = require('./controllers');
app.use(router);

router.get("/", async (req,res) => {
  console.log('hit home route')
  res.render('homepage')
})

const hbs = exphbs.create({ helpers });
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// NPM Start to see if server is working
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
