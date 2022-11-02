const express = require("express");
const dotenv = require("dotenv");
const employeeRouter = require("./router/employeeRouter");
//const mongo = require("./connect");
//mongo.connect();

const {MongoClient} = require("mongodb");
dotenv.config();
const app = express();
app.use(express.json());

module.exports = {
       
       var connect = async function () {
            try {
               const client = new MongoClient(process.env.MONGODB_UR);
               await client.connect();
               return client;
            
           } catch (err) {
               console.log("err");
          }
       }
   }
//  module.export async function createConnection(){
//    const client = new MongoClient(process.env.MONGODB_UR);
//    await client.connect();
//    return client;
// }
app.use("/",(req,res,next) => {
   var auth = {
    authorised: true,
   };
   if (auth.authorised) {
    console.log("Authorised");
    next();
   }else{
    console.log("Not Authorised");
    res.send({msg:"Not Authorised"});
   }
})

 app.use("/employees",employeeRouter);
    

// app.use("/posts",(req,res,next) => {
//     res.send([
//     {
//         name:"aaa",
//         age:20,
//     },
//     {
//         name:"bbb",
//         age:23,
//     },
//     ]);
// });

app.listen(process.env.PORT,()=>console.log("connected to server"));