var mongoose=require('mongoose')
var CourseSchema=new mongoose.Schema({
    CourseId:String,
    CourseName:String,
    Subject:String,
    Description:String,
    Duration:Number,
    Cost:Number,
})
var Course= mongoose.model('Course',CourseSchema);
module.exports=Course;