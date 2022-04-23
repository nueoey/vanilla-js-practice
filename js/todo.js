const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList= document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify()는 object나 array를 string으로 변환해줌
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //parseInt는 string인 li.id를 integer로 바꿔줌
    li.remove();
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id; //li태그의 id를 newToDo의 id값으로 지정
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    //span이 li의 child가 아니므로, 아래의 코드를 추가하여 li의 child로 만들어줌
    li.appendChild(span); 
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id : Date.now(), //뒤에 콤마(,) 붙이는것 잊지 말것!!!
    } //toDos에 text가 아닌 object를 저장
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos); 
    //string을 javascript에서 사용가능한 object로 만들어줌. 이 경우엔 array의 형태로 만들어줌
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //parsedToDos.forEach((item) => console.log("this is the turn of", item)); 
    //array내의 각각의 모든 item에 대해 함수를 실행해줌(arrow function)
    //function을 만들어주고 item 대신에 function이름을 넣어주는방법도 있으나, 위의 방법이 더 간단함

}

//filter function은 기존의 array를 변형하는 것이 아니라, 새 array를 만들어준다