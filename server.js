const express = require('express');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require('express-session');
const routes = require('./routes')

const PORT = process.env.PORT || 5000;
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser : true, useUnifiedTopology: true}, () => {
    console.log('connected to mongoDB');
});

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

//ROUTES
app.use(routes);


