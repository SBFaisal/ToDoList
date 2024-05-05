// Importing required modules
const express = require('express');

// Creating an Express application instance
const app = express();

 
// Importing required modules
const tasksRoutes = require('./api/TaskConroller/tasks')


app.use('/tasks', tasksRoutes);

module.exports = app;