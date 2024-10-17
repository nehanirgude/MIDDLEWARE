const express =require("express");
const app=express();


// random middleware
// app.use((req,res,next)=>{
//     res.send("im using next function");  
//     next();  //next function use to execute next middleware 
// });


//utility middleware

//logger-ex- morgan is popular one 

// app.use((req,res,next)=>{
    // console.log(req);
    // console.log(req.method); //along with methods there is many types of parameter prensent in res obj

// });


//authentication
app.use((req,res,next)=>{
     let {token}=body.query;
     if(token==="giveaccess"){
        next()
     }
     res.send("aceess deneid");
});

app.get("/api",(req,res)=>{
    console.log("data");
})


//middlware with specific path

//this middleware only work when we define /random path
//else it will not work with any other path not even for /

app.use("/random",(req,random)=>{
    console.log("i am random");
    next();
});
app.get("/",(req,res)=>{
    res.send("i am using root folder");
});


//special middleware if anyone try to access path which is not exist

//404

app.use((req,res)=>{
   res.send("page not found");
});


app.get("/random",(req,res)=>{
    res.send("i am using random path");
});

app.listen("8080",()=>{
    console.log("app is listening to the port:8080");  
});





