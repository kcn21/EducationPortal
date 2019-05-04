var mongoose=require('mongoose')
const Schema = mongoose.Schema;
var QuestionSchema=new mongoose.Schema({
    Title:String,
    OptionA:String,
    OptionB:String,
    OptionC:String,
    OptionD:String,
    CorrectOption:{type:String,enum:['A','B','C','D']},
    Marks:Number,
    QuizId:{ type: Schema.Types.ObjectId, ref: 'quiz' }
})
var Question= mongoose.model('Question',QuestionSchema);
module.exports=Question;