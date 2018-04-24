const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('./database');


module.exports = function (passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log(jwt_payload);
        User.getUserById(jwt_payload.data.id, (err, user) => {
            if (err) {
                return done(err, null);
            }
            if (user) {
                //limit user data in jwt, anyone can decrypt jwt, no sensitive data
                let user_jwt = {
                    id: user._id,   
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    wallet: user.wallet
                };
                return done(null, user_jwt);
            } else {
                return done(null, null);
                // or you could create a new account
            }
        });
    }));
}