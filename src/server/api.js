var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var cors=require('cors')
var url=require('url')
var db
var User=require('./schema/users')
var Video=require('./schema/video')
var Course=require('./schema/course')
var Subject=require('./schema/subject')
var Topic=require('./schema/topic')
var Quiz=require('./schema/quiz')
var Question=require('./schema/question')
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

app.post('/AddTopic',function(req,res){
    var t=req.body
    //console.log(t);
    //console.log(t.CourseId)
    //t.CourseId=mongoose.Types.ObjectId(t.CourseId)
    var topic=new Topic(t)
    console.log(topic)
    topic.save((err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.status(200).send(data)
        }

    })
})
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

            var myQuery1={CourseId:data.cId}
            db.collection('videos').deleteMany(myQuery1,function(err,obj){
                if(err)
                    throw err;
            })
            //console.log('deleted Course With Id '+data.cId);
            res.status(200).send(result)
    })
    var myQuery1={CourseId:data.cId}
    db.collection('videos').deleteMany(myQuery,function(err,obj){
        if(err)
            throw err;
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
        //console.log("course updated");
        res.status(200).send(result);

      })
})

app.post('/getCourseNames',function(req,res){
    db.collection("courses").find({}).toArray(function(err,result){
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
app.post('/getAllTopics',function(req,res){
    db.collection("topics").find({}).toArray(function(err,result){
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
// Gives Topics As Per Course
app.post('/getTopics',function(req,res){
    db.collection('courses').aggregate([
        {
            $lookup:
            {
                from:'topics',
                localField:'_id',
                foreignField:'CourseId',
                as:'topicdetails'
            }
        }
    ]).toArray(function(err,result){
        if(err)
            console.log("error while join")
        else
        {
            console.log("=============================================\n");
           console.log(result);
            res.status(200).send(result)
        }
    })
})
app.post('/removeTopic',function(req,res){
    var data=req.body
    var myQuery={_id:mongoose.Types.ObjectId(data.tId)}
    db.collection('topics').deleteOne(myQuery,function(err,result){
        if(err)
            throw err;
        //console.log('deleted Course With Id '+data.cId);
        res.status(200).send(result)
})
})
app.post('/updateTopic',function(req,res){
    var TopicData=req.body
    var myquery = { _id : mongoose.Types.ObjectId(TopicData._id)};
    console.log(myquery)
    var newvalues = { $set: {TopicName: TopicData.TopicName,Content:TopicData.Content }};
    console.log(newvalues)
    db.collection("topics").updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("course updated");
        res.status(200).send(result);
      })
})
app.post('/AddVideo',function(req,res){
    //console.log("POST Request")
    var videoData=req.body
    
    var video=new Video(videoData)
   // console.log(video)
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
    
    db.collection("videos").find({}, {_id:0, CourseId:1, Title:0, Description:0}).toArray(function(err,result){
        if(err)
        {
            console.log("error while getting course names")
        }
        else
        {
            console.log(result)
            res.status(200).send(result)
        }
    })
})
app.post('/GetCourseAsPerSubject',function(req,res){
    db.collection('subjects').aggregate([

    ]).toArray(function(err,result){
        if(err)
        {
            //console.log("Error while /GetCourseAsPerSubject")
        }
        else
        {
            //console.log(JSON.stringify(result));
            res.status(200).send(result)
        }
    })
})
app.post('/AddSubject',function(req,res){
    console.log("POST Request")
    var subjectData=req.body
    console.log(subjectData)
    var subject=new Subject(subjectData)
    subject.save((err,addedSubject)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(addedSubject)
    })
})

app.post('/updateSubject',function(req,res){
    var SubjectData=req.body
    var myquery = { _id : mongoose.Types.ObjectId(SubjectData._id)};
    //console.log(myquery)
    var newvalues = { $set: {SubjectName: SubjectData.SubjectName} };
    //console.log(newvalues)
    db.collection("subjects").updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("subject updated");
        res.status(200).send(result);
      })
})

app.post('/removeSubject',function(req,res){
    var arrofcourses
    var data=req.body
    //console.log(data.sId)
    var myQuery={_id:mongoose.Types.ObjectId(data.sId)}
    db.collection('subjects').deleteOne(myQuery,function(err,result){
            if(err)
                throw err;
            console.log(result)
            //console.log('deleted Course With Id '+data.sId);
            var myQuery1={SubjectId:data.sId}
            db.collection('courses').find(myQuery1).toArray(function(err,obj2){
                if(err)
                    throw err
                console.log(obj2)
                arrofcourses = obj2

                console.log("==============================\n"+arrofcourses)
                arrofcourses.forEach(element => {
                    var myQuery2 = {CourseId:element.CourseId}
                    db.collection('videos').deleteMany(myQuery2,function(err,obj){
                        if(err)
                            throw err;                
                    })  
            })
            db.collection('courses').deleteMany(myQuery1,function(err,obj){
                if(err)
                    throw err;
            //console.log("gayu")
            res.status(200).send(result)
            })
    })
})
})
app.post('/getTutorial',function(req,res){
    db.collection('videos').find({}).toArray(function(err,result){
        if(err)
            console.log("error while getting Tutorials")
        else
        {
            console.log(result)
            res.status(200).send(result)
        }
    })
})
app.post('/removeTutorial',function(req,res){
    var data = req.body
    var myQuery = {_id : mongoose.Types.ObjectId(data.tId)}
    db.collection('videos').deleteOne(myQuery,function(err,result){
        if(err)
            throw err
        
        res.status(200).send(result)
    })
})
app.post('/getSubjects',function(req,res){
    db.collection("subjects").find({},{SubjectName:1}).toArray(function(err,result){
        if(err)
        {
            console.log("error while getting course names")
        }
        else
        {
            console.log(result)
            res.status(200).send(result)
        }
})
})
app.post('/addQuiz',function(req,res){
    var quizData=req.body
    console.log(quizData)
    var quiz=new Quiz(quizData)
    quiz.save((err,addedQuiz)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(addedQuiz)
    })
})
app.post('/addQuestions',function(req,res){
    var quesData=req.body
    console.log(quesData)
    var ques=quesData.QuizQuestions
    ques.forEach(que=>{
        //console.log("==========")
        //console.log(que)
        //console.log("==========")
        var qData={
          Title:que.Title,
          OptionA:que.OptionA,
          OptionB:que.OptionB,
          OptionC:que.OptionC,
          OptionD:que.OptionD,
          CorrectOption:que.CorrectOption,
          Marks:que.Marks,
          QuizId:quesData.QuizId
        }
        var question=new Question(qData)
        console.log(question)
        question.save((err,data)=>{
            if(err)
                console.log(err)
            else{
                console.log("Question Added : "+que.Title)
            }   
        })
    })
    res.status(200).send({Message:"Added SuccessFully!"})
})
app.post('/getQuestions',function(req,res){
    var data=req.body
    db.collection("questions").find({}).toArray(function(err,result){
        if(err)
        {
            console.log("error while getting course names")
        }
        else
        {
            console.log(result)
            res.status(200).send(result)
        }
    })
})
app.post("/getQuizes",function(req,res){
    db.collection('courses').aggregate([
        {
            $lookup:
            {
                from:'quizzes',
                localField:'_id',
                foreignField:'CourseId',
                as:'quizdetails'
            }
        }
    ]).toArray(function(err,result){
        if(err)
            console.log("error while join")
        else
        {
           //console.log(JSON.stringify(result));
            res.status(200).send(result)
        }
    })
})
app.post("/getQuizForCourse",function(req,res){
    var data=req.body
    db.collection('quizzes').find({CourseId:mongoose.Types.ObjectId(data.cId)}).toArray(function(err,result){
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log(result)
            res.status(200).send(result)
        }
    })
})
app.listen(8081,()=>console.log("Server listening at 8081"))