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

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `<${todaysQuote.author}>`;