// object
// object는 많은 특성을 가질 수 있다. 
// {}중괄호를 이용하고, {}안에 특성을 적어주면 된다. 
// object안에서는 =를 사용하지 않고 :를 사용한다.
// 한개의 property를 작성하고 난 뒤 다른 특성이 올 경우에는 ,(콤마)를 이용하여 구분짓는다. 

const player1 = {
	name: "bogongE",
	age: 31,
	fat: true,
};
console.log(player1);
console.log(player1.name);
console.log(player1["name"]); //위와 같은 결과값이 나온다.

player1.fat = false; //업데이트 내용
player1.age = player1.age + 27; //업데이트 내용
player1.lastName = "taegGu"; //push의 역할을 함
player1.sexy = "soon"; //push의 역할을 함
console.log(player1);
// object안의 특성은 업데이트를 해줄 수 있다. 
// 여기서 업데이트(수정)하는 것은 object안의 무언가를 수정하는 것이지 object는 아직도 동일하다.
// error는 constant 전체를 하나의 값으로서 업데이트 하려고 할때 발생하는데 
// player = false; 이렇게 쓰면 여기서 constant는 boolean으로 바뀌는거고 에러가 생긴다.
// 하지만 constant 안의 무언가를 업데이트 할 때는 아무런 문제가 없다.