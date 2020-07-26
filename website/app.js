/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const button = document.getElementById('generate');
button.addEventListener('click', function(e){
    e.preventDefault();
    
    // get user data
    let user_data=[];
    user_data.push({
        'zip' : document.querySelector('#zip').value,
        'feelings' : document.querySelector('#feelings').value 
    });
    console.log(user_data)
    send_data(user_data);
});

const send_data = async (data) => {
    const request = await fetch('/send_data',{
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
    }catch(error){
        console.log('error' + error);
    }

};
