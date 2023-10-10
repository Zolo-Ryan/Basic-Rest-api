const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', async(req,res) => {
    const data = await userModel.find({})

    res.json({success: true ,data: data});
});

//create data || save data to mongodb
app.post('/create',async(req,res) => {
    console.log(req.body);
    const data = new userModel(req.body);
    await data.save();
    res.send({success: true, message: "data saved successfully"});
});

//update data
app.put('/update',async(req,res) => {
    console.log(req.body);
    const { id,...rest} = req.body;
    console.log(rest);
    await userModel.updateOne({_id: id},{ name: "amit111"})
    res.send({success : true, message: "data updated successfully"});
});

const Schema = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
},{
    timestamp: true,
});

const userModel = mongoose.model("user", Schema);


app.listen(PORT, () => {
    console.log("Server is Running");
});
const mongoString = "Put your mongodb connect uri here"
mongoose.connect(mongoString);
.then(() => console.log("Connected To db"))
.catch(err => console.log('Error: ' + err));