const mongoose=require('mongoose');


const issue=new mongoose.Schema({
    issuename:{
        type:String,
        required:true,
    },
    lable:[{
        type:String,
        required:true,
    }],
    description:{
        type:String,
        required:true,
    }
    , author:{
        type:String,
        required:true,
    },
    projectid:{
        type: String,
     }
})

const issues=mongoose.model('issues',issue);
module.exports=issues;