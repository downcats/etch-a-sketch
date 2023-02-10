let color = "black";

function createBoard(size){
    let gridbox = document.querySelector(".gridbox");
    let squares = gridbox.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    gridbox.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    gridbox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.className = "square";
            square.style.backgroundColor = "white";
            square.addEventListener("mouseover", changeColor);
            gridbox.insertAdjacentElement("beforeend", square);
        }
    }
}

let slider = document.querySelector("#gridslider");
let value = document.querySelector(".value");
let value2 = document.querySelector(".value2");

createBoard(slider.value);

value.textContent = slider.value;
value2.textContent = slider.value;
slider.addEventListener("input", (event) => {
    createBoard(event.target.value);
    value.textContent = event.target.value;
    value2.textContent = event.target.value;
})

function changeColor(){
    if(!isMouseDown) return;

    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function colorSelect(choice){
    color = choice;
}

function resetBoard(){
    let gridbox = document.querySelector(".gridbox");
    let squares = gridbox.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}

let isMouseDown;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);
