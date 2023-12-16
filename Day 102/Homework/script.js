// Employee object with default values and methods
function Employee(name, role = 'Employee', salary = 50000) {
    this.name = name;
    this.role = role;
    this.salary = salary;
  }
  
  Employee.prototype.promote = function (newRole) {
    this.role = newRole;
  };
  
  // Create an array to store employee data
  const employees = [];
  
  // Function to add a new employee
  function addEmployee(name, role, salary) {
    const employee = new Employee(name, role, salary);
    employees.push(employee);
    console.log(`Employee "${name}" has been added.`);
  }
  
  // Function to display all employees
  function displayEmployees() {
    console.log('Employee List:');
    for (const employee of employees) {
      console.log(`Name: ${employee.name}`);
      console.log(`Role: ${employee.role}`);
      console.log(`Salary: $${employee.salary}`);
      console.log('---');
    }
  }
  
  // Function to give a salary raise to an employee
  function giveSalaryRaise(name, amount) {
    const employee = employees.find(employee => employee.name === name);
    if (employee) {
      employee.salary += amount;
      console.log(`Salary of "${name}" has been increased by $${amount}.`);
    } else {
      console.log(`Employee "${name}" not found.`);
    }
  }
  
  // Adding employees using Object.assign() and computed keys
  addEmployee('John Doe', 'Manager', 60000);
  addEmployee('Jane Smith', 'Engineer', 55000);
  
  // Displaying employees using for...of loop
  displayEmployees();
  
  // Giving a salary raise using for...in loop and object method
  giveSalaryRaise('John Doe', 5000);
  
  // Displaying updated employees
  displayEmployees();
  