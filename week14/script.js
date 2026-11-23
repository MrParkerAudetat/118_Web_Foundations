const chooseSection = document.querySelector("#chooseSection");
const status = document.querySelector("#status");
const sections = ["Personal Life", "Hobbies and Interests", "Questions", "Future"];
const nameInput = document.querySelector("#nameInput");
const submitName = document.querySelector("#submitName");
const greeting = document.querySelector("#greeting");

function startDelay() {
    status.textContent = "Choosing section...";
    
    setTimeout(function () {
        const chosen = sections[Math.floor(Math.random() * sections.length)];
        status.innerHTML = "<strong>" + chosen + "</strong>.";
    }, 1000);
}

chooseSection.addEventListener("click", startDelay);
submitName.addEventListener("click", function () {
    const name = nameInput.value.trim();
    if (name) {
        greeting.textContent = "Welcome, " + name + "!";
    } else {
        greeting.textContent = "No name has been entered. Please enter your name.";
    }
});