// 여기서는 handleTitleClick function초점을 맞출 것이다. 
const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

// function handleTitleClick(){
	// 	console.log(h1.style.color); //getting.value -> 아무 값도 출력되지 않음
	// 	h1.style.color = "blue";
	// 	console.log(h1.style.color); //setting.value -> blue가 출력된다.
// }
function handleTitleClick(){
	const currentColor = h1.style.color;
	let newColor; // let은 값이 변경될 수 잇고, 지금은 아무것도 없는 비어있는 let변수 이다.  
	if(currentColor === "blue"){
		newColor = "tomato";
	}else{
		newColor = "blue";
	}
	h1.style.color = newColor;
}


h1.addEventListener("click", handleTitleClick);

// 이번엔 한번클릭했을 때는 파란색, 또 다시 눌렀을 때는 토마토색 반복으로 하고싶다
// 그러기 위해서는 무언가가 true인지 확인을 해야한다. 

