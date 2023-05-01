const express=require('express');
const mongoose =require('mongoose');
require('dotenv').config();
const path=require('path');
const ejs =require('ejs');
const expressLayouts=require('express-ejs-layouts');
const app=express();
const PORT=process.env.PORT||3000;


// mongoose connect object
mongoose.connect(process.env.mongoUrl,{useNewUrlParser:true}).then(()=>console.log('MongoDb connected'))
.catch(err=>console.log(err));

app.use(express.urlencoded({extended:true}));

// static file setup
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/assits'));
// seting up the view engine
app.set('view engine','ejs');
app.use(expressLayouts);

app.use('/',require('./routes'));

app.listen(PORT,(err)=>{
    
    console.log(`Server is working on port ${PORT}`);
})