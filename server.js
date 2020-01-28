// Imports express, the web server framework
const express = require('express');
// top level function exported by express module (node)
const app = express();

// define root route for the website
app.get(`/`, (req, res) => {
    res.send(`Hello World`);
})

// Set up the app to run on local machine server, port 7000
const server = app.listen(7000, ()=> {
    console.log(`Express running PORT ${server.address().port}`);
})

