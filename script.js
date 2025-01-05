

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    const newContent = document.createTextNode("test");
    div.appendChild(newContent);
    div.classList.add('allDivs');
    mainContainer.appendChild(div);
}


