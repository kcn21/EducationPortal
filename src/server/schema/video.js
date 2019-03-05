require('mongoose-type-url');
var mongoose=require('mongoose')
var VideoSchema=new mongoose.Schema({
    CourseId:String,
    Title:String,
    Link:String,
    Description:String
})
var Video= mongoose.model('Video',VideoSchema);
module.exports=Video;