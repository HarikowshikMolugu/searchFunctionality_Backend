const express = require('express');
const dataController = require('./dataController');
const cors = require('cors');
const app = express();
const multer= require('multer');
const upload = multer();
require('dotenv').config({ path: '.env' });
// Enable CORS
app.use(cors());

//middleware
app.use(upload.any()); 
app.use(express.static("upload"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//get data endpoint
app.get('/api/data/:filter',dataController.getData);

const port = process.env.PORT || 5000;


app.listen(port, function () {
    console.log('Server is running on port 5000');
});