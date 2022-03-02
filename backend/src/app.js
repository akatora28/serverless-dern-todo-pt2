const express = require("express")
const app = express()

// Dotenv config
const dotenv = require('dotenv');
dotenv.config();

// Using express.json() to read req.body
app.use(express.json())

// Dynamoose configuration
const dynamoose = require("dynamoose")
dynamoose.aws.sdk.config.update({"region": "us-east-1"});

// morgan for logging
const morgan = require("morgan")
app.use(morgan('dev'))

// Import Routes
app.use(require("./routes"))

module.exports = app;