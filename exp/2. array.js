//데이터 구조 array
//리스트를 그룹화
//const mon = "monday";
//const tue = "thesday";
//const wed = "wednesday";
//const thu = "thursday";
//const fri = "friday";
//const sat = "saturday";
//const sun = "sunday";

//const dayOfWeek = [mon, tue, wed, thu, fri, sat, sun];

const dayOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const nonsense = [1, 2, 3, "hello", false, null, true, undefined, "bogongE"];
console.log(dayOfWeek, nonsense);

// 1. array의 시작과 끝에는 대괄호[]를 사용해야한다. 
// 2. array안의 각각의 항목은 쉼표로 분리되어야 한다. 
// 3. 그러고 나면 뭐든 넣어도 되는데, 숫자, string, boolean, null 다 가능하다.

console.log(dayOfWeek[3]); //array안에서 항목을 받아오는 것

//array안에 요일을 더 추가하기 //원한다면 array에 하나를 더 추가할 수도 있다. 
dayOfWeek.push("bogongEday");
//push는 항목하나를 array안에 추가해주는 역할을 한다. 
console.log(dayOfWeek);
console.log(dayOfWeek[7]);