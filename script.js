// Selecting elements
var addButton = document.getElementById("add-popup-button");
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");

// Show popup
addButton.addEventListener("click", function() {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

// Cancel popup
var cancel = document.getElementById("cancel-story");
cancel.addEventListener("click", function(event) {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

// Add story
var container = document.querySelector(".container");
var addStory = document.getElementById("add-story");
var storyInput = document.getElementById("story-input");
var authorInput = document.getElementById("author-input");
var storyDes = document.getElementById("story-des");

addStory.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${storyInput.value}</h2>
        <h5>${authorInput.value}</h5>
        <p>${storyDes.value}</p>
        <button onclick="deleteStory(event)">Delete</button>`;
    
    container.append(div);

    // Reset form and hide popup
    storyInput.value = "";
    authorInput.value = "";
    storyDes.value = "";
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

// Delete story
function deleteStory(event) {
    event.target.parentElement.remove();
}
