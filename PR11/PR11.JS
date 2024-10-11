const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});
function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
<span>${taskText}</span>
<button class="delete">Delete</button>
<button class="complete">Complete</button>
`;
    li.querySelector('.complete').addEventListener('click', (e) => {
        li.classList.toggle('completed');
    });
    li.querySelector('.delete').addEventListener('click', (e) => {
        li.remove();
    });
    taskList.appendChild(li);
}