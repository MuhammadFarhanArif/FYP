let express=require('express');
let server=express();
let bodyParser=require('body-parser')

var users = [
    { id: 1, username: "farhan", password: 'abcd1234' },
    { id: 2, username: "ali", password: '1234' },
]

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(express.static('./build'))

require('./server/config/db-config');
require('./server/config/passport-config')(server,users);
require('./server/routes/all-routes')(server);


server.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).send("Error Catched by error handler.")
})



server.listen(process.env.PORT || 5000,()=>{console.log("server running")})