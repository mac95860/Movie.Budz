const passport = require('passport');
//how we authenticate against a database
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/User');

const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

//authorization, where we want to protect a resource/endpoint
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : 'Que-KCMO'
}, (payload, done) => {
    User.findById({_id: payload.sub}, (err, user) => {
        if(err)
            return done(err, false);
        if(user)
            return done(null, user);
        else 
            return done(null, false);
    })
}))


//triggered when user try to login
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({username}, (err, user) => {
        //something went wront with database
        if(err)
            return done(err)
        //if no user exists    
        if(!user)
            return done(null, false);
            //comparePassword imported from User.js
        user.comparePassword(password, done);
    })
}))