function addTask() {
  const inputField = document.getElementById('tf-input');
  const taskText = inputField.value.trim();
  if (!taskText) {
      alert('Please enter a task!');
      return;
  }
  
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;
  taskItem.id = `task-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  taskItem.classList.add('list-item');
  
  const editBtn = createButton('Edit', 'edit-button', () => modifyTask(taskItem.id));
  const deleteBtn = createButton('Delete', 'delete-button', () => removeTask(taskItem.id));
  
  taskItem.append(editBtn, deleteBtn);
  document.getElementById('task-container').appendChild(taskItem);
  
  inputField.value = '';
}

function createButton(text, className, callback) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add(className);
  button.addEventListener('click', callback);
  return button;
}

function modifyTask(taskId) {
  const taskElement = document.getElementById(taskId);
  if (!taskElement) return;
  
  document.getElementById('tf-input').value = '';
  document.getElementById('tf-input').setAttribute('placeholder', 'Edit a task');
  
  const addBtn = document.querySelector('.button');
  addBtn.textContent = 'Edit';
  addBtn.onclick = () => updateTask(taskId);
}

function updateTask(taskId) {
  const inputField = document.getElementById('tf-input');
  const updatedText = inputField.value.trim();
  if (!updatedText) return;
  
  document.getElementById(taskId).firstChild.textContent = updatedText;
  
  inputField.value = '';
  inputField.setAttribute('placeholder', 'Enter a task');
  
  const addBtn = document.querySelector('.button');
  addBtn.textContent = 'Add Task';
  addBtn.onclick = addTask;
}

function removeTask(taskId) {
  const taskElement = document.getElementById(taskId);
  if (taskElement) taskElement.remove();
}
