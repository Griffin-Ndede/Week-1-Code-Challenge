// function that calculates grades based n student marks
// A is for marks greater than 79 but less than 100
// B for marks between 60 and 79
// C for marks between 49 and 59
// D for marks between 40 and 49
// E for any marks less than 40 but greater than 0
// A function to display the calculated grade
// Prompt for the user to enter their marks

function calculateGrade(studentMarks) {
    if (studentMarks > 100 || studentMarks < 0) {
        alert("Error! Your grade should be between 0 and 100");
    }

    if (studentMarks > 79) {
        return "Congratulations! You got an A";
    } else if (studentMarks >= 60 && studentMarks <= 79) {
        return "You got a B";
    } else if (studentMarks >= 49 && studentMarks <= 59) {
        return "You got a C";
    } else if (studentMarks >= 40 && studentMarks <= 49) {
        return "You got a D";
    } else {
        return "Pull up your socks, you got an E";
    }
}

function displayGrade() {
    const studentMarks = prompt("Enter your marks");
    const grade = calculateGrade(studentMarks);
    document.getElementById("grade").textContent = grade;
}
