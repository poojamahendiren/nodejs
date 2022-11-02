
//const mongo = require('../connect');
const {ObjectId} = require("mongodb")
const {connect} =require("../index")
module.exports.getEmployees = async(req,res)=>{
    try {
        const client=await connect()
        const employeesData = await  client.db("guvi").collection("employees").find().toArray();
        res.send("no data");
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updateEmployees = async (req,res)=>{
    try {
        const id = req.params.id;
        const updatedData = await mongo.selectedDb.collection("employees").findOneAndUpdate({_id:ObjectId(id)} , {$set:{...req.body}} , {returnDocument:"after"} ); 
        res.send(updatedData);
    } catch (error) {
        console.error(err);
        res.status(500).send(err); 
    }
    
}

module.exports.createEmployees = async (req,res)=>{
    try {
        const insertedResponse = await mongo.selectedDb.collection("employees").insertOne(req.body);
        res.send(insertedResponse);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.deleteEmployees = async (req,res)=>{
    try {
        const id = req.params.id;
        const deletedData = await mongo.selectedDb.collection("employees").remove({_id:ObjectId(id)});
        res.send(deletedData);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}