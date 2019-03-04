var mongoose=require('mongoose')
const Schema = mongoose.Schema;
var QuizSchema=new mongoose.Schema({
    QuizName:String,
    TimeLimit:Number,
    CourseId:{ type: Schema.Types.ObjectId, ref: 'course' },
    TopicId:{ type: Schema.Types.ObjectId, ref: 'topic' }

})
var Quiz= mongoose.model('Quiz',QuizSchema);
module.exports=Quiz;