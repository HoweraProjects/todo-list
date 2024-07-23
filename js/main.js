// main.js
import { addTask, deleteTask, editTask, toggleComplete, addComment, renderTasks } from './taskHandler.js';
import { filterTasks, toggleFilter } from './filterHandler.js';
import { openEditModal, closeModal } from './modalHandler.js';
import { toggleTheme } from './themeHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('newTask');
    const dateInput = document.getElementById('dueDate');
    const importanceInput = document.getElementById('importance');
    const addTaskButton = document.getElementById('addTask');
    const deleteAllButton = document.getElementById('deleteAll');
    const filterButtons = document.querySelectorAll('.filter button');
    const toggleSwitch = document.getElementById('toggleSwitch');
    const settingsButton = document.getElementById('settingsButton');
    const themeSwitch = document.getElementById('themeSwitch');
    const closeModalButtons = document.querySelectorAll('.modal .close');
    const saveEditButton = document.getElementById('saveEdit');

    // Set the date input to the current date
    dateInput.value = new Date().toISOString().split('T')[0];

    addTaskButton.addEventListener('click', () => addTask(taskInput.value, dateInput.value, importanceInput.value));
    deleteAllButton.addEventListener('click', () => {
        tasks = [];
        renderTasks();
    });
    filterButtons.forEach(button => button.addEventListener('click', filterTasks));
    toggleSwitch.addEventListener('change', () => toggleFilter(toggleSwitch));
    settingsButton.addEventListener('click', () => document.getElementById('settingsModal').style.display = 'block');
    themeSwitch.addEventListener('change', toggleTheme);
    closeModalButtons.forEach(button => button.addEventListener('click', closeModal));
    saveEditButton.addEventListener('click', () => {
        const editTaskName = document.getElementById('editTaskName');
        const editDueDate = document.getElementById('editDueDate');
        const editImportance = document.getElementById('editImportance');
        editTask(currentEditIndex, editTaskName.value, editDueDate.value, editImportance.value);
    });
});
