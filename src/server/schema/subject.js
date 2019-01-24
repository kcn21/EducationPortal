var mongoose=require('mongoose')
var SubjectSchema=new mongoose.Schema({
    SubjectName:String
})
var Subject= mongoose.model('Subject',SubjectSchema);
module.exports=Subject;