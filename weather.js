

function getWeatherDetails(){
    let qplace = document.getElementById('city').value;
    alert(qplace);
    fetch('http://api.weatherapi.com/v1/current.json?' 
    + new URLSearchParams({
        "key": '11e912ca6cb84cafacb172239232501',
        "q" : qplace
    }))
    .then(response => {
        return response.json();
    }).then(text=>{
        console.log(text);
        document.getElementById('current').innerText = text['current']['temp_c'];
    });
}