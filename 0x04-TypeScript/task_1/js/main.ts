// Interface for the StudentClass instance
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Interface for the StudentClass constructor
// This describes the shape of the constructor function itself
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
    // Private properties to store the constructor arguments
    private _firstName: string;
    private _lastName: string;

    /**
     * Constructor for StudentClass.
     * @param firstName The first name of the student.
     * @param lastName The last name of the student.
     */
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    /**
     * Returns a string indicating the student is working on homework.
     * @returns The string "Currently working".
     */
    workOnHomework(): string {
        return "Currently working";
    }

    /**
     * Returns the first name of the student.
     * @returns The first name.
     */
    displayName(): string {
        return this._firstName;
    }
}

// Example usage:
// Create an instance of StudentClass
const student1: StudentClassInterface = new StudentClass("Alice", "Smith");

// Test the methods
const homeworkStatus = student1.workOnHomework();
const studentFirstName = student1.displayName();

console.log(`Student Name: ${studentFirstName}`);
console.log(`Homework Status: ${homeworkStatus}`);

const student2: StudentClassInterface = new StudentClass("Bob", "Johnson");
console.log(`Student Name: ${student2.displayName()}`);
console.log(`Homework Status: ${student2.workOnHomework()}`);


// To ensure console.log output is easily viewable in the browser,
// you can add a simple HTML structure.
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h1>Student Class Output</h1>
        <h2>Student 1:</h2>
        <p><strong>Name:</strong> ${student1.displayName()}</p>
        <p><strong>Homework:</strong> ${student1.workOnHomework()}</p>
        <h2>Student 2:</h2>
        <p><strong>Name:</strong> ${student2.displayName()}</p>
        <p><strong>Homework:</strong> ${student2.workOnHomework()}</p>
        <p>Check the browser console for more detailed output.</p>
    `;
    document.body.appendChild(outputDiv);
});