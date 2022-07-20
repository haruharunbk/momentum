// weather.js에서는 예전에 전혀 사용해본적 없는 함수를 사용해볼것이다. 
// 이 함수는 user의 위치(geolocation)를 준다. 
// 그리고 나면 화면에 날씨를 보여줄 것이다. 
// 우리가 사용할 함수는 navigator과 geolocation을 사용한다. 
// 그리고 getCurrentPosition()을 사용한다. 
// navigator.geolocation.getCurrentPosition()이걸 브라우저에서 하면 된다. 
// 그냥 이걸 부르면 브라우저에서 위치 좌표를 줄것이다. 
// WIFI, 위치, GPS등등 이코드만 하면 된다. 

// getCurrentPosition()이 어떤일을 하는지 보자면
// getCurrentPosition()은 argument가 2개가 필요하다.
// 1) 하나는 모든게 잘 됐을때 실행될 함수이고, 
// 2) 나머지 하나는 에러가 발생했을 때 실행될 함수이다.

// 만약 위치를 받는데 문제가 발생했을때,
// 만약 user가 위치 받는게 불가능하다고 했다면 아마도 알려줘야겠지?
// 하지만 위치를 얻는데 성공했다면? onGeoOK()를 실행할거다.
// javascript는 그냥 함수를 실행한 것보다 함수를 불러서 실행했을 떄 더 많은 정보를 줄 것이다. 
// javascript가 user의 위치를 전달해줄거다. 
// success 함수는 GeolocationPosition object 하나를 입력받는다.
// 이말은 javascript가 GeolocationPosition object를 준다는 말이다 하나의 input parameter로.
// 요점은 user의 위치를 얻는다는거다.

// GeolocationPosition을 열어보면 coords(좌표)가 있는데,
// 내가 있는 곳의 latitute(위도), longitude(경도) 알수가 있다. 


function onGeoOK(position){
	// 위치를 얻는데 성공했다면? onGeoOK()를 실행할거다.
	// javascript는 그냥 함수를 실행한 것보다 함수를 불러서 실행했을 떄 더 많은 정보를 줄 것이다. 
	// javascript가 user의 위치를 전달해줄거다. 
	// console.log(position);
	// 새로고침을 하면 브라우저가 나의 위치를 알고싶다고 물어보게 된다. 
	const lat = position.coords.latitude; // 위도를 얻는것
	const lng = position.coords.longitude; // 경도를 얻는것

	console.log("You live in", lat , lng);

}
function onGeoError(){
	// 만약 위치를 받는데 문제가 발생했을때,
	// 만약 user가 위치 받는게 불가능하다고 했다면 아마도 알려줘야겠지?
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);


// 두번째 단계는 이 숫자들을 장소로 바꿔주루 서비스를 사용해야한다.
// 우선 API계정을 열어야하는데
// openweathermap.org 웹사이트로 이동하자
// https://openweathermap.org/api
// 암튼 이건 우리의 위치의 날씨를 알려줄 것이다.
// 우리가 있는 장소의 이름과 현재 날씨를 줄거다 .
