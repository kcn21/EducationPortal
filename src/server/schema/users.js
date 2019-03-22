var mongoose=require('mongoose')
var UserSchema=new mongoose.Schema({
    FName:String,
    LName:String,
    Email:String,
    Role:{type:String,default:'User'},
    Password:String,
})
var User= mongoose.model('User',UserSchema);
module.exports=User;