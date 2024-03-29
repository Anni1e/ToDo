const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const form = document.querySelector(".form");
let to__do = document.querySelector(".page");
let hr = document.querySelector("hr");
const deleteAll = document.querySelector(".deleteAll");
const deleteIsDone = document.querySelector(".deleteIsDone");
// const buttons = document.querySelector(".buttons");
to__do.innerHTML = "";

let toDo = [];

if (localStorage.getItem("task") != null) {
  //извлечение всех заметок из localStorage
  toDo = JSON.parse(localStorage.getItem("task"));
  for (let el of toDo) {
    render(el.taskName);
  }
}
const close = document.querySelectorAll(".close");

deleteAll.addEventListener("click", () => {
  //слушатель событий для удаления всех дел, по клику использует метод
  localStorage.removeItem("task"); //removeItem и очищает localStorage
  toDo = []; //массив toDo становится пустым
  to__do.innerHTML = ""; //лист заметок очищается
  // console.log(localStorage.getItem("task")); //null
});

// hr.classList.add("d-none");
// deleteAll.classList.add("d-none");
// deleteIsDone.classList.add("d-none");
// buttons.classList.add("d-none");

function render(test) {
  //функция для отрисовки 1 заметки
  let check = document.createElement("div"); //создание нового элемента html
  check.innerHTML = `<div class="check"><div class="checked" >
  <input class="checkbox" type="checkbox" name="${test}" id="${test}"><label for="${test}" ><p>${test}</p>
  </div><button type="button" class="close">
  ❌
  </button></div>`;
  to__do.append(check); //вся отрисованная функция закидывается в переменную to__do, т е в класс page в html
}

form.addEventListener("submit", (evt) => {
  //слушатель событий для всей формы
  evt.preventDefault(); //сбрасываем дефолтный значения у инпута,чтобы страница не перезагружалась при добавлении заметки
  let task = input.value.trim(); //создаем переменную,которая будет равна заметке
  if (input.value == false) {
    //если заметка равна пустоте, тогда очищаем значение инпута
    input.value = "";
  } else {
    toDo.push({ taskName: task, isDone: false }); //иначе закидываем заметку в массив toDo, используя метод json, преобразуем в строку
    localStorage.setItem("task", JSON.stringify(toDo));

    render(input.value);
  }

  input.value = "";
});
