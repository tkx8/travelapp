const express=require("express");
const app=express();
const cors=require("cors");
const mongoose = require("mongoose");
const Destinations=require("./models/Destinations")
require('dotenv').config();

app.use(express.json());



app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}));


app.get('/test', (req,res)=>{
  mongoose.connect(process.env.MONGO_URL);
  res.json('test ok');
    
});

let placeData;
app.post('/place', (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  const {place} = req.body;
  console.log("in post place");
  console.log(place);
  res.json(place);
  placeData= place;
      
});

app.get('/place', async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  try {
    if (!placeData) {
      return res.status(400).json({ message: 'No place data available' });
    }

    const destination = await Destinations.findOne({ Name: placeData });
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
        
    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  });
  

app.listen(4000);