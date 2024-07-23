// taskHandler.js
let tasks = [];
let currentEditIndex = null;

export function addTask(task, dueDate, importance) {
    tasks.push({ task, dueDate, importance, completed: false, comment: '' });
    renderTasks();
}

export function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

export function editTask(index, newTask, newDueDate, newImportance) {
    tasks[index].task = newTask;
    tasks[index].dueDate = newDueDate;
    tasks[index].importance = newImportance;
    renderTasks();
}

export function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

export function addComment(index, comment) {
    tasks[index].comment = comment;
    renderTasks();
}

export function renderTasks(filter = 'all') {
    const taskList = document.getElementById('tasks');
    taskList.innerHTML = '';
    tasks.filter(task => {
        if (filter === 'all') return true;
        return filter === 'pending' ? !task.completed : task.completed;
    }).forEach((task, index) => {
        const li = document.createElement('li');
        const commentText = task.comment ? task.comment : '⚠️This task has no comment.';
        const tooltipClass = task.comment ? 'tooltiptext' : 'tooltiptext warning';
        li.innerHTML = `
            <span class="tooltip">
                <a href="#" onclick="addComment(${index})">${task.task}</a> - ${task.dueDate} - ${task.importance}
                <span class="${tooltipClass}">${commentText}</span>
            </span>
            <button onclick="toggleComplete(${index})">${task.completed ? '⌛Mark Pending' : '✅Mark Completed'}</button>
            <button onclick="openEditModal(${index})">✏️Edit</button>
            <button class="delete" onclick="deleteTask(${index})">🗑️Delete</button>
        `;
        taskList.appendChild(li);
    });
}
