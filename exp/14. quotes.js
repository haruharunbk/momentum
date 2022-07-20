// 명언들을 Array로 만들자.
// Array는 간단한 Array고 object들이 들어있다 
// object들은 콤마(,)로 구분해야 된다 
// object들은 string으로 된 명언을 가지고 있다. 
// 그 뒤에 다시 콤마가 오고 작가도  string으로 들어있다. 

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

// 우선 div와 span들을 가져와야 된다. 
// 명언이 10개가 든 Array여야한다. 그냥 text가 아니다.
// object형태로, quote에는 명언 text, author에도 text로 내용이 들어있는거다.
// 명언의 작가부터 가져와보자.

// 작가는 div 두번째 span에서 나오게 할 것이다.
// 명언은 div 첫번째 span에서 나오게 할 것이다. 
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 첫번째 Array안에 있는 element에 어떻게 접근해야 하는가
// 첫번째 element를 가져오려면 1이 아니라 0을 써야한다. 
// console.log(quotes[10 - 1]); //아맇게 나타내주면 됨

// 마지막 element를 가져오려면 Array를 세어봐야한다. 
// 그리고 컴퓨터는 0부터 읽기 시작하기 때문에 array의 길이에서부터 1을 빼야한다.

// 이걸 실행하려면 함수가 필요하다
// 0부터 Array의 길이인 10사이 숫자들에 접근해야 한다. 
// 이걸 사용하기 위해서는 Math module을 사용할 것이다.
// Math는 자바스크립트에서 이미 load돼서 공짜로 제공되고 있다. 

//console.log(Math.PI);
// PI값이 필요하다면 이렇게 불러와서 쓸수도 있다.

// Math는 흥미로운 function들도 많이 가지고 있는데 그중 하나가 random()이다. 
// random()은 0부터 1사이의 랜덤한 숫자를 제공한다. 
// 0 ~ 10 사이의 숫자를 구하고 싶다면
// Math.random() * 10을 곱해주면 된다.
// Math.random() * 10;
// Math.random() * 10 은 integer(정수)가 아닌 float(소수점을 가지는 실수)이다. 
// 따라서 소수점 자리를 없애줘야한다.
// 3가지 방법이 있는데 
// 첫번째가 round() 반올림
// Math.round(1.1) -> 1 / Math.round(1.6) -> 2

// 두번쨰는 ceil() 올림
// Math.ceil(1.01) -> 2

// 세번째는 floor() 내림
// Math.floor(1.9) -> 1

// 그럼 해야될 것은 랜덤하게 얻은 숫자에 10을 곱해서 floor()를 사용하는거다.
// console.log(Math.floor(Math.random() * 10)); -> 0~9가 나온다.
// 따라서 console.log(quotes[Math.floor(Math.random() * 10)]); 이렇게 표현해주면 된다.
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 이제 해야할 건 명언이랑 작가를 화면에 보이게 하는것이다. 
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;