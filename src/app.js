// Importing required modules
const express = require('express');

// Creating an Express application instance
const app = express();
const PORT = process.env.PORT | 3000;

 
// Importing required modules
const tasksRoutes = require('./tasks')


app.use('/tasks', tasksRoutes);

module.exports = app;