function Student() {
    this.firstName = prompt("Enter the first name of the student:");
    this.lastName = prompt("Enter the last name of the student:");
    this.grades = [];

    const numGrades = parseInt(prompt("Enter the number of grades:"));
    for (let i = 0; i < numGrades; i++) {
        const grade = parseFloat(prompt("Enter grade #" + (i + 1) + ":"));
        this.grades.push(grade)
    }
}

Student.prototype.calculateAverage = function() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
};

const myStudent = new Student()
console.log("Student Information:")
console.log("First Name: " + myStudent.firstName)
console.log("Last Name: " + myStudent.lastName)
console.log("Grades: " + myStudent.grades.join(", "))
console.log("Average Score: " + myStudent.calculateAverage())