// Importing required modules
const express = require('express');

// Creating an Express application instance
const app = express();

const tasksRoutes = require('./api/routes/ToDoList/tasks')


app.use('/tasks', tasksRoutes);


module.exports = app;

