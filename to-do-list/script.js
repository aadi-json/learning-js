document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('addButton');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addTask();
      }
  });

  function addTask() {
      const taskValue = taskInput.value.trim();
      if (taskValue === '') return;

      const li = document.createElement('li');
      li.textContent = taskValue;
      const deleteButton = document.createElement('button');
      deleteButton.classList.add("delete-button")
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
          taskList.removeChild(li);
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = '';
      taskInput.focus()
}
});
