// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(8000, function(){
    console.log('we are listening at port 8000')
})

app.post('/send_data', function(req, res){
    let user_data=[];
    user_data.push(req.body)
    console.log('We recieved user data \n' + JSON.stringify(user_data));
});