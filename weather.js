function getWeatherDetails(){
    let qplace = document.getElementById('city').value;
    const days = 7;
    fetch('https://api.weatherapi.com/v1/forecast.json?' 
    + new URLSearchParams({
        "key": '11e912ca6cb84cafacb172239232501',
        "q" : qplace,
        "days": days
    }))
    .then(response => {
        return response.json();
    }).then(text=>{
        document.getElementById('current').innerText = text['current']['temp_c'];
        document.getElementById('windSpeed').innerText = text['current']['wind_kph'];
        document.getElementById('humidity').innerText = text['current']['humidity'];

        let futureDays = text['forecast']['forecastday'];
        futureDays.forEach((element,index) => {

            document.getElementById(`max${index}`).innerText = element['day']['maxtemp_c'];
            document.getElementById(`min${index}`).innerText = element['day']['mintemp_c'];
            document.getElementById(`img${index}`).src = element['day']['condition']['icon'];
            document.getElementById(`sunrise${index}`).innerText = element['astro']['sunrise'];
            document.getElementById(`sunset${index}`).innerText = element['astro']['sunset'];
            if(index >= 2){
                document.getElementById(`date${index}`).innerText = element['date'];
            }
        });
        document.getElementById('weatherBlock').style.display = 'inline';
    });




}



