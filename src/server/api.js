var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var cors=require('cors')
var url=require('url')
var db

var app=express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/EducationPortal',function(err,database){
    if(err)
        console.error("Error"+err)
    else
    {
        console.log("MongoDB Connected")
        db = database;

    }
        
})
var User=require('./schema/users')
app.post('/register',function(req,res){
    console.log("POST Request")
    var userData=req.body
    console.log(userData)
    var user=new User(userData)
    console.log(user)
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

app.post('/RemoveCourse',function(req,res){
    var data=req.body
    //console.log(data.cId)
    var myQuery={_id:mongoose.Types.ObjectId(data.cId)}
    db.collection('courses').deleteOne(myQuery,function(err,result){
            if(err)
                throw err;
            //console.log('deleted Course With Id '+data.cId);
            res.status(200).send(result)
    })
})

app.post('/UpdateCourse',function(req,res){
    var CourseData=req.body
    var myquery = { _id : mongoose.Types.ObjectId(CourseData._id)};
    //console.log(myquery)
    var newvalues = { $set: {CourseName: CourseData.CourseName,Subject:CourseData.Subject,Description:CourseData.Description,Duration:CourseData.Duration,Cost:CourseData.Cost } };
    //console.log(newvalues)
    db.collection("courses").updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("course updated");
        res.status(200).send(result);

      });
});

app.post('/getCourseNames',function(req,res){
    db.collection("courses").find({},{CourseName:1}).toArray(function(err,result){
        if(err)
        {
            console.log("error while getting course names")
        }
        else
        {
            //console.log(result)
            res.status(200).send(result)
        }
})
})
var Video=require('./schema/video')

app.post('/AddVideo',function(req,res){
    console.log("POST Request")
    var videoData=req.body
    
    var video=new Video(videoData)
    console.log(video)
    video.save((err,addedVideo)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(addedVideo)
    })
})
app.post('/GetVideos',function(req,res){
    var data=req.body
    //console.log(data.cId)
    
    db.collection("videos").find({CourseId:data.cId}).toArray(function(err,result){
        if(err)
        {
            console.log("error while getting course names")
        }
        else
        {
            //console.log(result)
            res.status(200).send(result)
        }
    })
})
app.listen(8081,()=>console.log("Server listening at 8081"))