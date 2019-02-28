var mongoose=require('mongoose')
var CourseSchema=new mongoose.Schema({
    CourseName:String,
    SubjectId:String,
    ImagePath:String,
    Description:String,
    Duration:Number,
    Cost:Number,
})
var Course= mongoose.model('Course',CourseSchema);
module.exports=Course;