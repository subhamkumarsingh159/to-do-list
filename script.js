function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle('completed');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = '';
}
