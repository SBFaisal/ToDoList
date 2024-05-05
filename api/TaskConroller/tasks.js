const express = require('express')

const router = express.Router();

// Get all Task
router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'All tasks fetched succesfully'
    })
});

// Get Task by Id
router.get('/:taskId', (req, res, next) => {
    res.status(200).json({
        message : 'Task with given id fetched succesfully',
        id : req.params.taskId
    })
});

// Add new Task
router.put('/', (req, res, next) => {
    res.status(200).json({
        message : 'Task added succesfully'
    })
});

//Edit Task 
router.post('/', (req, res, next) => {
    res.status(200).json({
        message : 'Task edited succesfully'
    })
});


// Delete Task by Id
router.delete('/:taskId', (req, res, next) => {
    res.status(200).json({
        message : 'Task with given id deleted succesfully',
        id : req.params.taskId
    })
});

module.exports = router