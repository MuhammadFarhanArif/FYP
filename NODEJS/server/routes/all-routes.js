var passport=require('passport');
var society = require('../models/model-citizens')
var employees = require('../models/model-emp')
var announcements = require('../models/model-ann')

module.exports= function(server){

    // Login Routes
    server.post('/login', passport.authenticate('local'), function (req, res) {
        res.redirect('/dashboard');
    });


    server.get('/dashboard', function (req, res) {

        if (!req.isAuthenticated()) {
            res.send("Login Required to visit this page")
        } else if(username=='admin' && password=='admin'){
            res.send('/AHOME')
        } else {
            res.send('/RHOME')
        }
        // {
        //     res.send("Yes you're logged in, and your data is available here: " + req.user.username)
        // }

    });



    // Citizens Routes
    server.get('/getCitizen',(req,res)=>{

        society.find({
            
        }).
        exec(function(err,citizens){
            if(err){
                return res.json({success:false, err:err})
            }
            res.json({success:true, data:citizens})
        })
    })

    server.post('/addCitizen',(req,res)=>{
        // console.log(res.send('request recieved'))
        // console.log(req.body.Username)
        // {name:req.body.Username,cnic:req.body.Cnic,phoneno:req.body.Phoneno,flatno:req.body.Flatno}
        
        var element=new society({name:req.body.Username,cnic:req.body.Cnic,phoneno:req.body.Phoneno,flatno:req.body.Flatno})
        element.save((err, element) => {
            if (err) {
                return res.json({ success: false, err: err })
            }else{

                return res.json({ success: true, data: element })
            }
        });
    })

    server.delete('/deleteCitizen', (req, res, next) => {

        society.deleteOne({ name: req.body.Username }, function (err) {});
        // society.deleteMany({ name: req.body.Username }, function (err) {});
    })
   
    // Employees Routes

    server.post('/addEmp',(req,res)=>{

        var employee=new employees({ename:req.body.Eusername,ecnic:req.body.Ecnic,ephoneno:req.body.Ephoneno,expert:req.body.Expert})
        employee.save((err, employee) => {
            if (err) {
                return res.json({ success: false, err: err })
            }
                return res.json({ success: true, data: employee })
        });
    })

    server.get('/getEmp',(req,res)=>{

        employees.find({
            
        }).
        exec(function(err,employee){
            if(err){
                return res.json({success:false, err:err})
            }
            res.json({success:true, data:employee})
        })
    })

    server.delete('/deleteEmp',(req,res,next)=>{
        employees.deleteOne({ ename: req.body.Eusername }, function (err,msg) {
            // if(err){
            //     console.log('Cannot delete cause of error')
            // }else{
            //     console.log('Deleted Successfully')
            // }
        });
    })

    // Announcements Routes

    server.post('/addAnn',(req,res)=>{
        var announcement= new announcements({title:req.body.Title, ann:req.body.Ann})
        announcement.save((err, announcement) => {
            if (err) {
                return res.json({ success: false, err: err })
            }
            res.json({ success: true, data: announcement })
        });
    })
    
    server.get('/getAnn',(req,res)=>{

        announcements.find({
            
        }).
        exec(function(err,announcement){
            if(err){
                return res.json({success:false, err:err})
            }
            res.json({success:true, data:announcement})
        })
    })




}