const mongoose=require('mongoose');


const project=new mongoose.Schema({
    projectname:{
        type:String,
        required:true,
    },
    decre:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    issues:[
        {
            type:String,
         }
    ]
})

const projects=mongoose.model('projects',project);

module.exports=projects;