// DirectorInterface with 3 methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with 3 methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher();
    }
  }
  return new Director();
}

// Test the createEmployee function
console.log(createEmployee(200));
// Expected: Teacher

console.log(createEmployee(1000));
// Expected: Director

console.log(createEmployee('$500'));
// Expected: Director

// Additional tests to verify methods work
const employee1 = createEmployee(200);
console.log(employee1);
if (employee1 instanceof Teacher) {
  console.log(employee1.workFromHome()); // Cannot work from home
  console.log(employee1.getCoffeeBreak()); // Cannot have a break
  console.log(employee1.workTeacherTasks()); // Getting to work
}

const employee2 = createEmployee(1000);
console.log(employee2);
if (employee2 instanceof Director) {
  console.log(employee2.workFromHome()); // Working from home
  console.log(employee2.getCoffeeBreak()); // Getting a coffee break
  console.log(employee2.workDirectorTasks()); // Getting to director tasks
}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Task 6: 
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test executeWork function
console.log(executeWork(createEmployee(200)));
// Expected: Getting to work

console.log(executeWork(createEmployee(1000)));
// Expected: Getting to director tasks