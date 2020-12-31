const path = require("path");
// server framework
const express = require("express");
// login session
const session = require("express-session");
// front end
const exphbs = require("express-handlebars");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
// database configuration
const sequelize = require("./config/config");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// As the user is logged in the session is made private with use of dotenv
const sess = {
  secret: process.env.Server_PW,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// helpers formatting dates 
const hbs = exphbs.create({
  helpers: {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
});
// front end
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./controllers/'));
// sequelize begins, handles the databases. 
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
