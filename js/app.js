document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('submit', deleteAll);

});

const handleForm = function(event) {
  event.preventDefault();
  const item = event.target.task.value;
  const priority = event.target.priority.value;
  const type = event.target.type.value;

  const newEntry = document.createElement('li');
  newEntry.textContent = `Do ${item}  (${type})`;
  newEntry.classList.add('entry');
  if(priority === "noturgent"){
    newEntry.classList.add('urgent1');
  }
  if(type === "quite"){
    newEntry.classList.add('urgent2');
  }
  if(type === "very"){
    newEntry.classList.add('urgent3');
  }
  const info = document.querySelector('#todolist');
  info.appendChild(newEntry);
  this.reset();
};



const deleteAll = function() {
  const allElements = document.querySelectorAll('.entry')
  while(allElements.firstChild){
    allElements.removeChild(allElements.firstChild);
  }
}
