const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"

function onLoginBtnSubmit(e) { 
	e.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, loginInput.value) 
	paintGreetings();
}

function paintGreetings(){ 
	const typedUsername = localStorage.getItem(USERNAME_KEY); 
	greeting.innerText = `Hello ${typedUsername}!`; 
	greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY); 

if(savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginBtnSubmit); 
}else{
	paintGreetings();
}