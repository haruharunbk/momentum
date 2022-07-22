const quotes = [
	{
		quote: "You can not be happy every day. But there are happy things every day.",
		author: "Winnie the Pooh",
	},
	{
		quote: "If today is the worst day of your life, then you know tomorrow will be better.",
		author: "The Lion King",
	},
	{
		quote: "Anyone can be anything.",
		author: "Zootopia",
	},
	{
		quote: "There comes a day when you are gonna look around and realize happiness is where you are.",
		author: "Moana",
	},
	{
		quote: "When it's clear that everything will never be the same again.",
		author: "Frozen",
	},
	{
		quote: "I decide my own feelings, It's going to be happiness today.",
		author: "Alice in Wonderland",
	},
	{
		quote: "Life is full of possibilities.",
		author: "Soul",
	},
	{
		quote: "It's never too late to live young.",
		author: "Snow White",
	},
	{
		quote: "I fell for a while now, but I'm going to get up.",
		author: "Bambi",
	},
	{
		quote: "Don't close your eyes, Look!, The reality of fear can be different than you think.",
		author: "Finding NEMO",
	},
	{
		quote: "You're only a fool if you give up.",
		author: "Aladdin",
	},
	{
		quote: "Even miracles take a little time.",
		author: "Cinderella",
	},
	{
		quote: "One lie makes many.",
		author: "Pinocchio",
	},
	{
		quote: "I can't go back to yesterday, because I was a different person then.",
		author: "Cinderella",
	}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;




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
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`; // bgImage의 src설정

document.body.appendChild(bgImage);


// 기본적으로 우리가 했던건 Array에서 랜덤하게 한가지 element를 골라내는 거였다. 
// 이게 background.js와 quotes.js에서 사용했던 방식이다.
// Array가 있었고, 그중에 하나를 랜덤하게 골랐다.
// 다시말하지만 우리가 기억해야할 가장 중요한 부분은 여기 숫자를 고르는 부분이다.
// Math.floor(Math.random() * quotes.length)
// 여기서 랜덤한 요소들이 나오는 거니깐
// Math.random()은 랜덤한 숫자를 가져다준다. 
// 하지만 그 숫자들은 0과 1사이의 숫자들로 보기가 좋지 않다. 
// 그래서 우리는 0과 어떤수 사이의 어떤 랜덤한 수 를 가져오고 싶은때 해야하는 일은 
// 그냥 그 수를 곱하는거다. 그게 어떤수든지 상관없이 말이다.

// quote와 background에서는 모두 우리가 가진 Array의 길이 만큼을 곱해줬다. 
// Array는 내부에 item들을 가질 수 있고, 그 안에 몇개의 item이 있는지 알아낼 수 있다.
// 예를 들면 Math.random() * 5를하면, 5는 내 Array의 길이이다 .
// 이건 0에서 5사이의 수를 반환할 것이다. 
// 하지만 5를 주지는 않는다. 왜냐하면 5가 최고치 숫자니깐!
// 5가 안나오지만 계속 진행해도 되는 이유는 
// Array에 5개의 item이 있다고 해도 우리는 절대 숫자 5가 필요한게 아니다. 
// 실제로 필요한 숫자는 4이고, Array의 마지막 element에 접근할 수 있는 수이다. 
// 꼭 기억해야될 것이, item이 5개 있는 Array에서 마지만 item을 가져오려면 
// 필요한건 숫자 4라는 것이다.

// 그다음 우리가 했던건 floor()이다. 
// Math.floor()을 사용한 이유는 소숫점 아래를 전부 내림해줘서 그냥 정수가 되기 때문이다. 

// images에도 똑같이 math.random()을 해줬고 이미지 하나를 선택했다. 
// 그리고나서, javascript에서 HTML element를 만들었다. 
// const bgImage = document.createElement("img");
// 여기서 element를 먼저 생성했다. 
// javascript에서도 유효하기만 하다면 우리가 원하는 어떤 element도 만들 수 있다.
// bgImage.src = `img/${chosenImage}`;
// 그리고 이미지를 선택하고 src로 img폴더 뒤에 추가해줬다.
// img 폴더의 이름이 같아야 하는것도 잊어서는 안된다. 
// 그리고 마지막으로 우리가 생성하 bgImage를 body에 append시키면 된다. 
// 제일 마지막에 들어가있는거니깐 append를 쓴거고, 대신 prepend를 사용해도 된다. 
// prepend를 사용하면 이미지가 가장 위에 있게 된 것을 볼 수 있다. 
// append는 가장 뒤에, prepend는 가장 위에 오게 하는 거다.

