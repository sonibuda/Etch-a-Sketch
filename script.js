


const mainContainer = document.getElementById('mainContainer');
const button = document.getElementById('btn')

function createGrid(size) {
    mainContainer.innerHTML = "";
    const totalSquares = size * size;
    const squareSize = 600/ size;
    
    for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement("div");
    div.classList.add('allDivs');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    mainContainer.appendChild(div);
}

let boxes = document.getElementsByClassName('allDivs');

//Loop over divs by converting to array.
Array.from(boxes).forEach(box => {
    box.addEventListener('mouseover', changeColor);
});
}


function changeColor(e){
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = "#";
        for (let i = 0; i <6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        }
        e.target.style.backgroundColor = getRandomColor();
    }

    function changeGrid() {
        let gridSize = prompt('How many boxes would you like in your new grid? Minimum 16, Maximum 100.');
        let numSquares = Number(gridSize);

        if (isNaN(numSquares) || numSquares < 16 || numSquares > 100) {
            alert("Enter a numerical value between 16 and 100.");
            return;
        }

        createGrid(numSquares);
        
    }

    createGrid(16);
    button.addEventListener('click', changeGrid);

 


 







