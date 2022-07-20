// 랜덤 background-images
// quotes.js랑 비슷하다.
// 우리가 하려는게 랜덤한 숫자를 얻어서 그걸로 이미지를 고르고,
// 그 이미지를 body에 추가하려는 거다. 
// 첫번째로 image Array를 만들어준다.
// img 폴더에 있는 이미지들이랑 
// 이 images Array안의 이름이 같게 해주면 된다. 
// 폴더 안에 있는 이미지 이름들을 javascript 파일에서도 똑같이 쓴다는 것만 명심하자.


const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 0 ~ 5까지 나옴
// Math.floor()로 숫자를 내림해준다. 
// Math.random()으로 나온 숫자에 images Array의 길이 값을 곱한 숫자를 내림하는 것다. 

console.log(chosenImage);

// 그럼 이제 진짜로 해야될건 이 이미지를 html에 실제로 추가하는거다.
// 지금까지 우리가 해온건 html에서부터 무언가를 가져오는거였다.
// 아직 javascript에서 뭔가를 만들어서 그걸 html에 추가해본적은 없다.
// 다시말해서 우리는 항상 html을 먼저 작성하고 javascript를 사용해서 작성한 html을 다뤄왔다.
// 한번도 javascript에서 뭔가를 생성해서 그걸 html에 추가해본 적이 없었다. 

// 우리의 목표는 html에 images를 만드는건데 이미지가 뭐가 될지 모르기 때문에 
// 이걸 실제 html에서는 할 수가 없고 이미지를 추가하기 위해서는 javascript가 필요하다

const bgImage = document.createElement("img");
// document.createElement("img");
// ttml 태그 생성하기 

bgImage.src = `img/${chosenImage}`; // bgImage의 src설정
console.log(bgImage);

// 그리고 당연히 여기선 랜덤한 string으로 이걸 만들어 낸거고
// 다시 말하지만 내가 가진 img폴더에 이미지들이 
// images Array와 이름이 같은이름으로 되어있지 않으면 제대로 동작되지 않을 것이다.

// 마지막으로 해야할 일은 이 bgImage를 body 내부에 추가하는 일이다. 
// 보시다시피 이건 아직 document에 존재하지 않고 아직은 javascript에만 존재한다.


document.body.appendChild(bgImage);
// body를 사용해야하는데 body를 불러온적없으니깐 body를 불러오고
// document.body의 appendChild()를 사용한다 
// appendChild()는 body에 html tag을 추가할 거야 라는 의미




////////////////////////////////////////////////////////////////////////////
// css background image로 쓸경우
// const body = document.querySelector("body");
// const chosenImage = images[Math.floor(Math.random() * images.length)]; // 0 ~ length-1까지 나옴
// 
// body.style.backgroundImage = `url(img/${chosenImage})`;