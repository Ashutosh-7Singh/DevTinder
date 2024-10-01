const express = require("express");
const app = express();
//  we can do like this 
app.use("/user", (req, res, next) => {
  console.log("Handling the route user1!!");
  //   res.send("Route Handler 1!");
  next()
  },(req, res, next) => {
    console.log("Handling the route user 2 !!");
    // res.send("Router Hander 2 !!")
    next();
},
(req,res,next)=>{
    console.log("Handling the route user 3 !!");
    // res.send("Router Handler 3 !!)
    next();
}

);


// or we can all in one array also we can put any two in one array 

app.use("/user",
    [ (req, res, next) => {
    console.log("Handling the route user1!!");
    //   res.send("Route Handler 1!");
    next()
    },(req, res, next) => {
      console.log("Handling the route user 2 !!");
      // res.send("Router Hander 2 !!")
      next();
  },
  (req,res,next)=>{
      console.log("Handling the route user 3 !!");
      // res.send("Router Handler 3 !!)
      next();
  }
]
  );
  

app.listen(7777, () => {
  console.log("Server is listning on port 777..... ");
});
