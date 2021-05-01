//Libraries
const express = require('express');
const session = require('express-session');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//defines app
const app = express();

//staticly hosting our public folder/files(css & javascript)
app.use(express.static('public'));

//where app is hosted
const PORT = process.env.PORT || 3000;

//go to routes folder index.js
const routes = require("./routes")
app.use(routes);

const control = require('./controllers');
app.use(control);

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

// NPM Start to see if server is working
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
