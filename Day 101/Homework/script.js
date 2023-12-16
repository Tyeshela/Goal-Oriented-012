// Task object with default values and a method to mark it as completed
function Task(title, description = 'No description provided', completed = false) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
  
  Task.prototype.markAsCompleted = function () {
    this.completed = true;
  };
  
  // Create an array to store tasks
  const taskList = [];
  
  // Function to add a new task
  function addTask(title, description) {
    const task = new Task(title, description);
    taskList.push(task);
    console.log(`Task "${title}" has been added.`);
  }
  
  // Function to display all tasks
  function displayTasks() {
    console.log('Task List:');
    for (const task of taskList) {
      console.log(`Title: ${task.title}`);
      console.log(`Description: ${task.description}`);
      console.log(`Completed: ${task.completed ? 'Yes' : 'No'}`);
      console.log('---');
    }
  }
  
  // Function to mark a task as completed by title
  function markTaskAsCompleted(title) {
    const task = taskList.find(task => task.title === title);
    if (task) {
      task.markAsCompleted();
      console.log(`Task "${title}" has been marked as completed.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }
  
  // Adding tasks using the spread operator
  addTask('Buy groceries', 'Milk, eggs, bread');
  addTask('Write code', 'Finish the project');
  
  // Displaying tasks using for...of loop
  displayTasks();
  
  // Marking a task as completed using for...in loop and object method
  markTaskAsCompleted('Buy groceries');
  
  // Displaying updated tasks
  displayTasks();
  