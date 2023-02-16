
const Employee=require('../models/employee');

// show the list of employees

const index=((req,res,next)=>{
    Employee.find()
    .then((result)=>{
      
          res.send(result);
        
    })
    .catch((err)=>{
        res.send(err);
    })
});


const show=((req,res,next)=>{
   const employeeID=req.body.employeeID
   Employee.findById(employeeID)
   .then((result)=>{
    res.send(result);
   })
   .catch((err)=>{
     res.send(err);
   })
});

const store=((req,res,next)=>{
    const employee =new Employee({
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
    })
    employee.save()
    .then((result)=>{
        res.send('employee added')
    })
    .catch((err)=>{
        res.send(err)
    })
});

//update data 
const update=((req,res,next)=>{
    const employeeID=req.body.employeeID;
    const updatedData={
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
           
    }
    
    Employee.findByIdAndUpdate(employeeID,{$set:updatedData})
    .then((result)=>{
        res.send('employee updated')
    })
    .catch((err)=>{
        res.send(err);
    })
});

//delete data
const destroy=((req,res,next)=>{
    const employeeID=req.body.employeeID

    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.send('employee deleted')
    })
    .catch((err)=>{
        res.send(err)
    })
});
 module.exports={
    index,show,store,update,destroy
 }