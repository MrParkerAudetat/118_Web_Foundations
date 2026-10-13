const chooseSection = document.querySelector("#chooseSection");
const status = document.querySelector("#status");
const sections = ["Personal Life", "Hobbies and Interests", "Questions", "Future"];

function startDelay() {
    status.textContent = "Choosing a section...";
    
    setTimeout(function () {
        const chosen = sections[Math.floor(Math.random() * sections.length)];
        status.textContent = "The section that has been chosen is " + chosen + ".";
    }, 1000);
}

chooseSection.addEventListener("click", startDelay);