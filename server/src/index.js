const express = require('express');
const app = express();
require('dotenv').config({
    path: '../server/src/config/dev.env'
})
require('./database/mongoose');

console.log("DATABAE INFO", process.env.DATABASE_URL);

module.exports = app;

