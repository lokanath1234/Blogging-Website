const mongoose = require('mongoose');
const chalk = require('chalk')

let connectionUrl = `${process.env.DATABASE_URL}${process.env.DATABASE_NAME}`;


console.log("CONNECTION URL", connectionUrl)

mongoose.connect(connectionUrl, {}, (error) => {
    if (error) {
        console.log(chalk.red.bold(`ERROR WHILE CONNECTING TO THE DATABASE ${error}`));
    } else {
        console.log(chalk.green("DATABASE SUCCESSFULLY CONNECTED"));
    }
});