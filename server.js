// Setup empty JS object to act as endpoint for all routes
projectData = {};
const api_url="https://api.openweathermap.org/data/2.5/weather?zip=";
const api_key="&appid=18469d3a3186337d7789d29f520088e9"

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
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

    console.log(user_data[0].zip)
    let weather_data = get_weather_data(user_data[0].zip);
    console.log("we got the weather data \n" + JSON.stringify(weather_data));
});

let get_weather_data = async (zip) => {
    console.log(api_url + zip + api_key);
    let request = await fetch(api_url + zip + api_key);
    try{
        let data = await request.json();
        console.log(data);
        return data;
    }catch(error){
        console.log("error" + error);
    }
}