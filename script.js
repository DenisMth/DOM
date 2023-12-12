document.title = "Hello World !";
let rgbMax = 255;

function randomNB(max){
    return Math.floor(Math.random() * max);
}

let color = `rgb(${randomNB(rgbMax)}, ${randomNB(rgbMax)}, ${randomNB(rgbMax)})`;

let titre = document.title;

document.body.style.backgroundColor = color;

console.log(titre);

for (element of document.body.children){
    console.log(element);
}   