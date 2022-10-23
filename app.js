const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault(); // this will prevent the page from refreshing when you submit your form
  const todo = addForm.add.value.trim();
  console.log(todo);

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//delete todos

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove(); // this will remove the parent of the trashcan icon which is the li tag.
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
  //todo refers to each of the li tag

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//searching and filtering tools
//keyup event

search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodos(term);
});
