// Imports express, the web server framework
const express = require('express');
// bringing in the json data key labelled people
const people = require('./people.json');
// top level function exported by express module (node)
const app = express();

// ...
// defining the template engine being used
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));
// ...

// define root route for the website
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage',
        people: people.profiles
    });
});
// route for /profile
app.get('/profile', (req, res) => {
    res.send(req.query.id);
})

// Set up the app to run on local machine server, port 7000
const server = app.listen(7000, ()=> {
    console.log(`Express running PORT ${server.address().port}`);
})


