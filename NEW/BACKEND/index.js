const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');
const morgan = require('morgan')

require('dotenv').config()


// ROUTES #################################
const GetProducts = require('./routes/getProducts');


const PORT = 8080

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    const data ={
        message:"Welcome To AFFORDMED",
        timestamp: new Date().toISOString(),
        stattus:200
    }
  res.status(200).json(data);
});


app.use('/api/getProducts/',GetProducts);


const connectToDB = async() =>{
  try {
      await mongoose.connect(`mongodb://localhost:27017/GoMart`,{
      })
      .then(
          app.listen(PORT,()=>{
              console.log(`SERVER : http://localhost:${PORT}`)
          }
      ))
      .then(console.log('MongoDB Connected'))
  } catch (error) {
      console.log(error.message)
      process.exit(1)
  }
}

connectToDB()