const submit = document.querySelector('.submit-btn');
const input = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

// Fetch API Function

submit.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=b23efc626c5c1777ad76c81c8fc96bab')
    .then(response => response.json())
    .then(data => {
        const nameValue = data['name'];
        const tempValue = data['main']['temp'];
        const descValue = data['weather'][0]['description'];
        const humidValue = data['main']['humidity'];
        
        name.innerHTML = nameValue;
        temperature.innerHTML = 'Temperature: ' + tempValue;
        description.innerHTML = descValue;
        humidity.innerHTML = 'Humidity: ' + humidValue;

        input.value = "";
    })   // Error Message if City name is wrong
    .catch(err => alert("Invalid City Name. Please Enter a Valid City Name"));
})