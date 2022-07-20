const clock = document.querySelector("h2#clock");

function getClock(){
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minntes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	clock.innerText = `${hours} : ${minntes} : ${seconds}`;
}
getClock();
setInterval(getClock, 1000);

// 우리는 getClock()이라는 function을 만들었고
// 그 안에서 Date object를 새로 생성했는데
// Date object는 네가 이걸 호출하는 당시의 현재 날짜랑 시간을 알려준다.
// 코드를 실행한 그 시점의 밀리초, 분, 시간 등을 전부 가져올수 있다
// 딱 그 시점을 알려주는 거다.
// 거기서 시간, 분, 초도 알아냈는데 number타입으로 받은 값을 string으로 바꾸고 싶었다.
// string으로 바꾼후 구한 시간을 clock의 innerText로 넣어줬다

// 중요한건
// 우리가 padStart() function을 썻다는 것이고,
// padStart() function은 내가 가지고 있는 string보다 길게 만들어야 할 때 사용하는거다.
// 원하는 만큼의 길이가 아니라면 string의 앞쪽에 문자를 끼워넣는거다.
// 여기서 하고 있는건 이 string이 두글자가 되길 원한다는 것과 
// 그렇지 않다면 string 앞쪽에 0을 추가하겠다는 거다.

// 다음 중요한건
// setInterval(getClock, 1000);
// 여기가 바로 실시간으로 보이게 하는 부분이다.
// setInterval을 쓰지 않으면 한번만 실행되고 작업이 반복되지는 않는다. 
// 제일 중요한건 이 function을 매초마다 호출하기 때문에 이게 실시간 처럼 보인다는 것이다. 
