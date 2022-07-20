const API_KEY = "ec649e3c9bc2f50224586663141a99ff";

function onGeoOK(position){
	const lat = position.coords.latitude; 
	const lon = position.coords.longitude; 
	// console.log("You live in", lat , lon);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	//console.log(url);
	// fetch(url); // javascript가 fetch를 써서 실제로 URL에 갈필요 없이 URL을 요청해서 부름
	fetch(url)
	.then(response => response.json())
	.then(data => {
		const weather = document.querySelector("#weather span:first-child");
		const city = document.querySelector("#weather span:last-child");
		city.innerText = data.name ; 
		weather.innerText = data.weather[0].main;
	}); // URL을 fetch하고.. 그다음으로 response를 받아야한다. 
	
}
function onGeoError(){
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);


// https://openweathermap.org/api
// Current Weather Data 이것이 사용할 API keye다.
// 기본적으로 API는 다른 서버와 이야기 할 수 있는 방법이다.
// 지금은 open weather map서버와 이야기 할거다.  

// 우선 할 건 API key를 받을뒤에 
// 여기 API 문서를 클릭하면 위치에 대한 현재 날씨를 얻을 수 있다.
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 이 뜻은 URL에 좌표를 보낼 수 있다는 의미이다. 
// 이 URL에서 정보를 응답할 것이다. 
// ec649e3c9bc2f50224586663141a99ff 내 API key
// 내가 할일은 latitute, longitute, API key와 함께 API를 부르는거다.

// 이제 javascript에서 URL을 부르는 방법을 알아보자.
// url변수로 만들고 [백틱(`)으로 감쌀것이다.]
// 이제 URL에서 정보를 얻을 차례이다.
// console에서 url을 클릭하면 브라우저가 URL로 이동해서 응답을얻는다.
// fetch를 사용해서 URL을 얻을거다.
// fetch(url);을 사용해서 URL을 부를거다.
// console에는 나타나진 않지만 chrome의 network에 가면 WIFI에서 어떤 일이 일어나고 있는지 보여준다.
// 우리가 뭔가 했을 때 인터넷에서 무슨일이 일어나는지 보여준다.
// javascript가 fetch를 써서 실제로 URL에 갈필요 없이 URL을 요청해서 부름
// URL을 수정한다는건 이렇게 &unit=metric을 추가해주자.

// 이제 이 URL을 얻었을 때 뭘 하라고 javascript에게 말해줘야 한다.
// 이제 fetch가 작동하는 방법은 간단하지 않다.
// fetch는 promise고, promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 거다.
// 서버에 뭔가 물어봤는데 서버가 응답하는데 5분이나 걸린다고 해보자.
// 그러면 서버의 응답을 기다려야 하는데, 그래서 then을 사용해야한다.!!!!
// fetch(url).then();
// 이제 어떤일이 일어나냐면 URL을 fetch하고.. 그다음으로 response를 받아야한다. 
// 그리고 response의 json을 얻어야 한다. 
// response.json()은 URL파일이 JSON이다. 
// 그리고 내용을 추출했으면 data를 얻을거다.
// 그리고 여기에 console.log로 우리가 원하는걸 볼수있다.
// data를 보면 data에 name을 해보자 
// weather는 array이다. array의 첫번째 요소의 main을 얻어야 한다.
// 때라서 array의 첫번째 element를 얻고 main을 해야한다.
// weather[0].main

