var mongoose=require('mongoose')
const Schema = mongoose.Schema;
var TopicSchema=new mongoose.Schema({
    TopicName:String,
    Content:String,
    CourseId:{ type: Schema.Types.ObjectId, ref: 'course' }
    //CourseId:String
})
var Topic= mongoose.model('Topic',TopicSchema);
module.exports=Topic;