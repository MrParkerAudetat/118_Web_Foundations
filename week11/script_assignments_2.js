const countDisplay = document.querySelector("#countDisplay");
const buttonAdd = document.querySelector("#buttonAdd");
const buttonSubtract = document.querySelector("#buttonSubtract");
const buttonReset = document.querySelector("#buttonReset");

let completedAssignments = 0;

function renderCount() {
    countDisplay.textContent = `Completed assignments: ${completedAssignments}`;
}

function addAssignment() {
    completedAssignments += 1;
    totalAssignments();
    renderCount();
}

function subtractAssignment() {
    completedAssignments -= 1;
    if (completedAssignments <= 0) {
        completedAssignments = 0;
    }
    renderCount();
}

function resetAssignment() {
    completedAssignments = 0;
    renderCount();
}

function totalAssignments() {
    if (completedAssignments == 0) 
        alert("No assignments completed yet!");
    if (completedAssignments == 16)
        alert("All Web Development assignments completed!");
    return completedAssignments;
}

buttonAdd.addEventListener("click", addAssignment);
buttonSubtract.addEventListener("click", subtractAssignment);
buttonReset.addEventListener("click", resetAssignment);