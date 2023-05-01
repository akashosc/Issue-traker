const Project = require('../models/projectname');
const Issue=require('../models/issue');

module.exports.addProject=(req,res)=>{
    res.render('editProject');
}
module.exports.seeProject=async (req,res)=>{
    const id=req.params.id;
    const doc= await Project.findById(id);
    const docs=await Issue.find({});
     const issue=[]
    for(var i=0;i<docs.length;i++){
        if(docs[i].projectid==id){
            issue.push(docs[i]);
        }
    }
    res.render('projectDet',{
        doc:doc,
        issue:issue,
    });
}
module.exports.addProjectP=(req,res)=>{
    
    const projectdet=new Project({
        projectname:req.body.projectname,
        decre:req.body.decre,
        author:req.body.author,
    })
    projectdet.save();
    res.redirect('/');
}
module.exports.deletproject=async (req,res)=>{
    const id=req.params.id;
    const doc=await Project.findByIdAndRemove(id);
    console.log(doc);
    res.redirect('/');
}
module.exports.search=async (req,res)=>{
    const docP=await Issue.find({projectid:req.params.id});
    const doc=await Project.findById(req.params.id);
    const kd=[];
    for(var i=0;i<docP.length;i++){
        for(var j=0;j<docP[i].lable.length;j++){
             if(docP[i].lable[j]==req.query.lable){
                var kp=0;
                for(var k=0;k<kd.length;k++){
                    if(kd[k]==docP[i]){
                        kp=1;
                    }
                }
                if(kp==0){
                    kd.push(docP[i]);
                }
                kp=0;
             }
            }   
        
        if(docP[i].issuename==req.query.search||docP[i].author==req.query.author){
            kd.push(docP[i]);
        }
    }
    res.render('projectDet',{
        doc:doc,
        issue:kd,
    });
}

