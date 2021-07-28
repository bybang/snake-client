// importing file
const {connect} = require("./client.js"); // {connect: function()... }
// const connect = imports.connect // means  imports.connect(= const {connect} = require("./client.js");)
const {setupInput} = require("./input.js")

// USER INPUT

console.log("Connecting ...");

setupInput(connect());
