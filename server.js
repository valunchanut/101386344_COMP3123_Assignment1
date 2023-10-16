const express = require('express');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

// Database Connection
const dbURI = 'mongodb://127.0.0.1:27017/comp3123_assignment1';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000, () => {
      console.log("Server is running on port 3000");
  }))
  .catch((err) => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

