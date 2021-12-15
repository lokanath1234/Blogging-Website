const app = require('./index');
const chalk = require('chalk')
require('dotenv').config({
    path: './config/dev.env'
})

let PORT = process.env.PORT || 8000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(chalk.red(`SOME ERROR OCCURED WHILE STARTING THE APP`))
    } else {
        console.log(chalk.green.bold(`THE APP STARTED SUCCESSFULL ON PORT ${PORT}`))
    }
})