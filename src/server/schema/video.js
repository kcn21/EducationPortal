require('mongoose-type-url');
var mongoose=require('mongoose')

const Schema = mongoose.Schema;
var VideoSchema=new mongoose.Schema({
    CourseId:{ type: Schema.Types.ObjectId, ref: 'course' },
    Title:String,
    Link:String,
    Description:String
})
var Video= mongoose.model('Video',VideoSchema);
module.exports=Video;