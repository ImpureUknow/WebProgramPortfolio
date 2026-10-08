let gameImages = ["My%20pic/long-way-home-cover.png", "My%20pic/long-way-home-menu.png"];
let imageNumber = 0;

window.onload = pageLoad;

function pageLoad() {
    document.getElementById("change-image").onclick = changeImage;
    document.getElementById("filter-all").onclick = showAllAssignments;
    document.getElementById("filter-html-css").onclick = showHtmlCssAssignments;
    document.getElementById("filter-javascript").onclick = showJavaScriptAssignments;
}

function showAllAssignments() {
    filterAssignments("all");
}

function showHtmlCssAssignments() {
    filterAssignments("html-css");
}

function showJavaScriptAssignments() {
    filterAssignments("javascript");
}

function filterAssignments(category) {
    let assignments = document.querySelectorAll(".assignment-list li");
    let buttons = document.querySelectorAll(".assignment-filters button");

    for (let i = 0; i < assignments.length; i++) {
        if (category == "all" || assignments[i].classList.contains(category)) {
            assignments[i].classList.remove("assignment-hidden");
        } else {
            assignments[i].classList.add("assignment-hidden");
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-filter");
    }
    document.getElementById("filter-" + category).classList.add("active-filter");
}

function changeImage() {
    if (imageNumber == 0) {
        imageNumber = 1;
        document.getElementById("game-image-caption").innerHTML = "ภาพเมนูเกม Long Way Home";
    } else {
        imageNumber = 0;
        document.getElementById("game-image-caption").innerHTML = "ภาพปกเกม Long Way Home";
    }

    document.getElementById("game-image").src = gameImages[imageNumber];
}
