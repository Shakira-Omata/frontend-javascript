// 1. Interface named Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2. Create two students
const student1: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Johnson",
    age: 22,
    location: "London"
};

// 3. Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// 4. Using Vanilla Javascript, render a table and for each element in the array, append a new row to the table
// 5. Each row should contain the first name of the student and the location

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    // Create table header
    const headerRow = document.createElement("tr");
    const thFirstName = document.createElement("th");
    thFirstName.textContent = "First Name";
    const thLocation = document.createElement("th");
    thLocation.textContent = "Location";
    headerRow.appendChild(thFirstName);
    headerRow.appendChild(thLocation);
    tbody.appendChild(headerRow);

    studentsList.forEach((student: Student) => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
});