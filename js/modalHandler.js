// modalHandler.js
export function openEditModal(index) {
    currentEditIndex = index;
    const editTaskName = document.getElementById('editTaskName');
    const editDueDate = document.getElementById('editDueDate');
    const editImportance = document.getElementById('editImportance');
    const tasks = getTasks(); // Assuming getTasks() is a function that retrieves the tasks array
    editTaskName.value = tasks[index].task;
    editDueDate.value = tasks[index].dueDate;
    editImportance.value = tasks[index].importance;
    document.getElementById('editModal').style.display = "block";
}

export function closeModal() {
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('editModal').style.display = 'none';
}
