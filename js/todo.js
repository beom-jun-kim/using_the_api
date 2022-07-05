const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = document.querySelector('#todo-form input');

const TODOS_KEY = 'toDos';
let toDos = [];

// 배열 문자열로 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// X클릭시 삭제 함수, 지운 함수 기억
function deleteBtn(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

// submit시 그림을 그려주는(글자들이 나타나게 해주는) 함수
function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteBtn);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// submit시, 사용자가 입력한 text값을 오브젝트로 변환 후 저장
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener('submit', handleToDoSubmit);

// 배열에 값이 있을경우,
// 문자열인 배열을 다시 오브젝트로 변환 후 배열로 도출
// 배열에 빈값을 주지않기 위해 (why? 그래야 이전것을 기억함) 원래 있던 배열의 값을 넣어줌
// 배열에 선언된 각 item을 실행시킴
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}