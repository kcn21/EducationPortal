var mongoose=require('mongoose')
const Schema = mongoose.Schema;
var CourseSchema=new mongoose.Schema({
    CourseName:String,
    SubjectId:{ type: Schema.Types.ObjectId, ref: 'subject' },
    ImagePath:String,
    Description:String,
    Duration:Number,
    Cost:Number
})
var Course= mongoose.model('Course',CourseSchema);
module.exports=Course;