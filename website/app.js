/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const button = document.getElementById('generate');

button.addEventListener('click', function(e){
    e.preventDefault();

    // get user data
    let user_data;
    user_data = {
        'zip' : document.querySelector('#zip').value,
        'feelings' : document.querySelector('#feelings').value 
    };
    console.log(user_data)
    send_data(user_data).then((data) => {
        show_data_to_the_user(data, newDate);
    });
});

const send_data = async (data) => {
    let request = await fetch('/send_data',{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
    });

    try{
        let data = await request.json();
        console.log(data);
        return data;
    }catch(error){
        console.log('error' + error);
    }
};

function show_data_to_the_user(weather, date){
    document.querySelector('#date').textContent ='Date: ' + date;
    document.querySelector('#temp').textContent = 'Temprature: ' + weather.temprature;
    document.querySelector('#content').textContent = `More details: 
        There's ${weather.weather} 
        and you feel ${weather.feelings}`;
}