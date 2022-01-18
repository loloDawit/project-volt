const express = require('express');
const colors = require('colors');
require('dotenv').config();
const dbConnection = require('./config/db');
// Load routes
const auth = require('./routes/auth');
const cookieParser = require('cookie-parser');

// DB connection
dbConnection();
const app = express();
// parse the body
app.use(express.json());
// parse the cookier
app.use(cookieParser());

app.use('/api/v1/auth', auth);
app.use('/api/v1/', (req, res) => {
  res.send({ message: 'Hi' });
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on Port ${PORT}`.yellow.bold);
});

module.exports = server;