const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const morgan = require('morgan')

require('dotenv').config()


// ROUTES #################################
const GetProducts = require('./routes/getProducts');


const PORT = 8080
const BACKEND_URL = `http://20.244.56.144/test`

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

app.listen(PORT || 3000, () => {
  console.log(`SERVER : http://localhost:${PORT}`);
})