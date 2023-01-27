let loadCountries = function(){
    fetch('https://countriesnow.space/api/v0.1/countries/positions').
    then((response) => {
        return response.json();
    })
    .then((text) => {
        console.log(text['msg']);
        let countryArr = text['data'];
        countryArr.forEach(element => {
            let select = document.getElementById('country');
            let opt = document.createElement('option');
            opt.innerText = element['name'];
            opt.value = element['name'];
            select.appendChild(opt);
        });       
    })
};

loadCountries();

function loadStates(){
   if(document.getElementById('country').value == ''){
       document.getElementById("state").options.length = 0;
       document.getElementById("city").options.length = 0;
       return;
    }
    document.getElementById("city").options.length = 0;
    document.getElementById("state").options.length = 0;
   let selectedCountry = document.getElementById('country').value;
   console.log(document.getElementById('country').value);
    fetch('https://countriesnow.space/api/v0.1/countries/states', {
        method: "POST",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          },    
          body: new URLSearchParams({
            "country" : selectedCountry
          }),
    }).then((response) => {
        return response.json();
    }).then((text)=> {
        console.log(text);
        let stateArr = text['data'].states;
        stateArr.forEach((item) => {
            let selectState = document.getElementById('state');
            let stateOpt = document.createElement('option');
            stateOpt.innerText = item['name'];
            stateOpt.value = item['name'];
            selectState.appendChild(stateOpt);
        })
    });
}


function loadCities(){
    document.getElementById("city").options.length = 0;
    let selectedState = document.getElementById('state').value;
    let selectedCountry = document.getElementById('country').value;
    console.log(selectedCountry);
    console.log(selectedState);
    fetch('https://countriesnow.space/api/v0.1/countries/state/cities',{
        method: "POST",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          },    
        body: new URLSearchParams({
            "state" : selectedState,
            "country": selectedCountry
          }),
    }).then((response)=> {
        return response.json();
    }).then((text) => {
        console.log(text);
        let cityArr = text['data'];
        console.log(cityArr[0]);
        cityArr.forEach((item) => {
            let selectCity = document.getElementById('city');
            let cityOpt = document.createElement('option');
            cityOpt.innerText = item;
            cityOpt.value = item;
            selectCity.appendChild(cityOpt);
        })
    });
}