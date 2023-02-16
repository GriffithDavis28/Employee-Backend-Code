const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const bodyParser=require('body-parser');

const EmployeeRoute=require('./routes/employee');
mongoose.connect('mongodb+srv://Biztron:biztron1234@cluster0.ey97pbk.mongodb.net/Blogs-DB?retryWrites=true&w=majority')
   .then((result) => {console.log("Connected...."); } )
   .catch((err) => { console.log(err); });

const app=express();
 app.use(morgan('dev'));
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());
 const PORT=process.env.PORT || 3000
 app.listen(PORT,()=>{
    console.log(`sever is running on port ${PORT}`)
 });
app.use('/api/employee',EmployeeRoute);