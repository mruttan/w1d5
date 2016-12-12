var chalk = require("chalk");

var message = "Hello " + chalk.yellow.underline("World") + chalk.bold.red.bgGreen(" my name is Matt");
console.log(message);