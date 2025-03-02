


for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    //const newContent = document.createTextNode("test");
    //div.appendChild(newContent);
    div.classList.add('allDivs');
    mainContainer.appendChild(div);
}




let boxes = document.getElementsByClassName('allDivs');

//Loop over divs by converting to array.
Array.from(boxes).forEach(box => {
    box.addEventListener('mouseover', changeColor);
});


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

    const button = document.getElementById('btn');
    button.addEventListener('click', changeGrid);

    function changeGrid() {
        let gridSize = prompt('How many boxes would you like in your new grid? Minimum 16, Maximum 100.');
        alert(gridSize);
        let numSquares = Number(gridSize);

        if (isNaN(numSquares)) {
            alert("Enter a numerical value.");
        }
        
    }

 








