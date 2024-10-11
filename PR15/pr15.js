const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', loadTasks);

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
        updateLocalStorage();
    });

    li.querySelector('.delete').addEventListener('click', (e) => {
        li.remove();
        updateLocalStorage();
    });

    taskList.appendChild(li);
    updateLocalStorage();
}
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTask(task.text, task.completed);
        if (task.completed) {
            taskList.lastChild.classList.add('completed');
        }
    });
}

function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(li => {
        const text = li.querySelector('span').textContent;
        const completed = li.classList.contains('completed');
        tasks.push({ text, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
