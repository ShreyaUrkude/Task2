
let isActive = false;

function updateContent() {
    const title = document.getElementById("title");
    const description = document.getElementById("description");

if (isActive) {
        title.innerText = "Welcome";
description.innerText = "Click the button to activate learning mode.";
        isActive = false;
} else {
        title.innerText = "Learning Mode Active";
        description.innerText = "You are now actively engaged!";
    isActive = true;
    }
}
