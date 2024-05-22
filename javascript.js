
const gridSize = document.querySelector("button");
gridSize.addEventListener("click", draw);
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function hoverEffect(square) {
    if (square.style.backgroundColor === "red") {
        square.style.backgroundColor = "white";
    } else {
        square.style.backgroundColor = "red";
    }
}
function draw() {
    const input = document.querySelector("input");
    if (!isNumeric(input.value) || input.value > 100) {
        alert("Invalid value! Input must be a number < 100");
        input.value = "";
        return;
    }
    const width = Number(input.value);
    const grid = document.querySelector(".grid");
    removeAllChildNodes(grid);
    for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.style.borderColor = "black";
    square.style.borderStyle = "solid";
    square.style.padding = (700/2)/width-1.5 + 'px';
    square.className = "box";
    square.addEventListener("mouseover", function() {
        hoverEffect(square);
    });
    grid.appendChild(square);
    }
}
