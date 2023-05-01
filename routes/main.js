const express=require('express');
const router=express.Router();
const Project=require('../models/projectname');
const projectController=require('../controller/project');
const issueController=require('../controller/issue');

router.get('/',async (req,res)=>{
   const doc=await Project.find({});
    res.render('home',{
        doc:doc,
    });
})
// all get routes

router.get('/addproject',projectController.addProject);
router.get('/projectDet/:id',projectController.seeProject);
router.get('/addissue/:id',issueController.addissue);
router.get('/delproject/:id',projectController.deletproject);
router.get('/delissue/:id',issueController.delissue);
router.get('/search/:id',projectController.search);
// all post routes
router.post('/addproject',projectController.addProjectP);
router.post('/addissue/:id',issueController.addissueP);

module.exports=router;