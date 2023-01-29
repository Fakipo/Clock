function getWeatherDetails(){
    let qplace = document.getElementById('city').value;
    const days = 7;
    alert(qplace);
    fetch('https://api.weatherapi.com/v1/forecast.json?' 
    + new URLSearchParams({
        "key": '11e912ca6cb84cafacb172239232501',
        "q" : qplace,
        "days": days
    }))
    .then(response => {
        return response.json();
    }).then(text=>{
        console.log(text);
        document.getElementById('current').innerText = text['current']['temp_c'];
        document.getElementById('windSpeed').innerText = text['current']['wind_kph'];
        document.getElementById('humidity').innerText = text['current']['humidity'];

        let futureDays = text['forecast']['forecastday'];
        futureDays.forEach((element,index) => {

            document.getElementById(`max${index}`).innerText = element['day']['maxtemp_c'];
            document.getElementById(`min${index}`).innerText = element['day']['mintemp_c'];
            document.getElementById(`img${index}`).src = element['day']['condition']['icon'];
            if(index >= 2){
                document.getElementById(`date${index}`).innerText = element['date'];
            }
        });
    });




}



