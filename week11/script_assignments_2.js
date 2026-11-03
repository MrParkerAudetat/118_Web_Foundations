const countDisplay = document.querySelector("#countDisplay");
const buttonAdd = document.querySelector("#buttonAdd");
const buttonSubtract = document.querySelector("#buttonSubtract");
const buttonReset = document.querySelector("#buttonReset");
const STORAGE_KEY = "completedAssignments";

let completedAssignments = Number(localStorage.getItem(STORAGE_KEY)) || 0;

function saveAssignments() {
    localStorage.setItem(STORAGE_KEY, completedAssignments);
}

function renderCount() {
    countDisplay.textContent = `Completed assignments: ${completedAssignments}`;
    saveAssignments();
}

function addAssignment() {
    completedAssignments += 1;
    totalAssignments();
    saveAssignments();
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
    if (completedAssignments == 16)
        alert("All Web Development assignments completed!");
    return completedAssignments;
}

buttonAdd.addEventListener("click", addAssignment);
buttonSubtract.addEventListener("click", subtractAssignment);
buttonReset.addEventListener("click", resetAssignment);

renderCount();