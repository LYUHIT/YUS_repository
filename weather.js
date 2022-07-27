const APIKEY = "e250f96d44893acf614d0781b1bfdef0";
const weath = document.getElementById("weather");
const loca = document.getElementById("location");

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
    fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            weath.innerText = data.weather[0].main;
            loca.innerText = data.name;
        })

}

function onGeoError(){
    alert("위치 정보를 얻을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);