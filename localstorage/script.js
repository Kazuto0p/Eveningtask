document.addEventListener('DOMContentLoaded', loadTasks);

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        createTaskElement(task, index);
    });
}

// Create a task element
// Create a task element
function createTaskElement(task, index) {
    const li = document.createElement('li');

    // Add 'completed' class only if task is completed
    if (task.completed) {
        li.classList.add('completed');
    }

    // Checkbox for completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleComplete(index));
    
    // Task description
    const span = document.createElement('span');
    span.textContent = task.text;

    // Update button
    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.classList.add('updateBtn');
    updateBtn.addEventListener('click', () => updateTask(index));

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => deleteTask(index));

    // Append elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

// Add task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
});

// Toggle task completion
function toggleComplete(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

// Delete task
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

// Update task
function updateTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const task = tasks[index];

    // Set the task text in the input
    taskInput.value = task.text;

    // Remove the task from the list
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}
