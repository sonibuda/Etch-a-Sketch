

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

   








