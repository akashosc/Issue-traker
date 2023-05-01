const Issue=require('../models/issue');
const Project=require('../models/projectname');

module.exports.addissue=async (req,res)=>{
    
    res.render('addIssue',{
        id:req.params.id,
    });
}
module.exports.delissue=async (req,res)=>{
    const id=req.params.id;
    const doc=await Issue.findByIdAndRemove(id);
    res.redirect('back');
}

module.exports.addissueP=async (req,res)=>{
    const id=req.params.id;
   const addissue=new Issue({
  issuename:req.body.issuename,
        lable:req.body.lable,
        description:req.body.description,
        author:req.body.author,
        projectid:id,
    });
    addissue.save(); 
    // addissue.save();
    res.redirect(`/projectDet/${id}`);
}