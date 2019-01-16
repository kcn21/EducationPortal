var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var cors=require('cors')
var url=require('url')

var app=express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/EducationPortal',err=>{
    if(err)
        console.error("Error"+err)
    else
        console.log("MongoDB Connected")
})
var User=require('./schema/users')
app.post('/register',function(req,res){
    console.log("POST Request")
    var userData=req.body
    console.log(userData)
    var user=new User(userData)
    user.save((err,registeredUser)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(registeredUser)
    })
})
app.post('/login',function(req,res){
    //console.log("POST Request For Login")
    var userData=req.body
    console.log(userData)
    User.findOne({Email:userData.Email,Password:userData.Password},(erro,user)=>{
        if(erro)
            console.log(erro)
        else
        {
            if(!user)
            {
                
                //res.status(401).send('Invalid Username or Password')
                res.status(200).send()
            }
            else
            {
                res.status(200).send(user)
            }
        }
    })
})
var Course=require('./schema/course')
app.post('/AddCourse',function(req,res){
    console.log("POST Request")
    var courseData=req.body
    console.log(courseData)
    var course=new Course(courseData)
    course.save((err,addedCourse)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(addedCourse)
    })
})


app.listen(8081,()=>console.log("Server listening at 8081"))