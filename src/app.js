// Importing required modules
const express = require('express');

// Creating an Express application instance
const app = express();
const PORT = 3000;

// Sample data
const users = [
    { id: '20IT001', name: 'Faisal' },
    { id: '20IT002', name: 'Aarif' },
    { id: '20IT003', name: 'Mustajab' }
  ];

  // Route to get all users
app.get('/api/users', (req, res) => {
    res.status(200).json(users);
  });


  // Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
