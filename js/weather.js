const API_KEY = "ec649e3c9bc2f50224586663141a99ff";

function onGeoOK(position){
	const lat = position.coords.latitude; 
	const lon = position.coords.longitude; 
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	fetch(url)
	.then(response => response.json())
	.then(data => {
		const temperatures = document.querySelector("#weather span:first-child");
		const weather = document.querySelector("#weather span:nth-child(2)");
		const city = document.querySelector("#weather span:last-child");
		temperatures.innerText = (data.main.temp).toFixed(1) + "℃";
		city.innerText = data.name ; 
		weather.innerText = data.weather[0].main;
	});
}

function onGeoError(){
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);