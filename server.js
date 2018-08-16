const express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser');
require('dotenv').config();

const app = express()

app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT || 8000;

app.listen(port, ()=>{
console.log(`server is running on port ${port}`)
})
