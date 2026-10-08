let gameImages = ["My%20pic/long-way-home-cover.png", "My%20pic/long-way-home-menu.png"];
let imageNumber = 0;

window.onload = pageLoad;

function pageLoad() {
    document.getElementById("change-image").onclick = changeImage;
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
