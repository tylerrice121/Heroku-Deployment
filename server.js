//====================================
//             DEPENDENCIES
//====================================
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
require('dotenv').config();

//====================================
//             DATABASE
//====================================
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL);

//------------------------------------
// Error / Success
db.on('connected', () => console.log(`Connected to ${db.name} database on port: ${db.port}`));
db.on('error', () => console.log(`MongoDB had an error ${error.message}`));
//====================================
//             MIDDLEWARE
//====================================
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.use(methodOverride('_method'));

//====================================
//             ROUTES
//====================================
//------------------------------------
//INDEX
app.get("/", (req, res) => {
    res.send("Hello World!")
  });
//------------------------------------
//DELETE
//------------------------------------
//UPDATE
//------------------------------------
//CREATE
//------------------------------------
//SHOW
//====================================
//             LISTENER
//====================================
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express is listening on port: ${port}`));