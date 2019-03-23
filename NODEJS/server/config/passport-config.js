var session=require('express-session');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;

module.exports= function (server, users){

    server.use(session({ secret: "secret-word"}));

    server.use(passport.initialize());
    server.use(passport.session());

    passport.use(new LocalStrategy(
        function (username,password,next){
            var citizen=users.find((citizen)=>{
                return citizen.username === username && citizen.password === password;
            })
            if (citizen) {
                next(null, citizen);
            } else {
                next(null, false);
            }        
        }
    ));
    passport.serializeUser(function (citizen, next) {
        next(null, citizen.id);
    });
    passport.deserializeUser(function (id, next) {
        var citizen = users.find((citizen) => {
            return citizen.id === id;
        })
    
        next(null, citizen);
    });


}