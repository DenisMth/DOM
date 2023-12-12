let rgbMax = 255;

function randomNB(max){
    return Math.floor(Math.random() * max);
}

function randomColor(){
    return `rgb(${randomNB(rgbMax)}, ${randomNB(rgbMax)}, ${randomNB(rgbMax)})`;
}

const anchor = document.querySelectorAll(".important");
anchor.title = "This is an important item";

const images = document.querySelectorAll("img");
for (elem of images){
    if (elem.className != "important"){
        elem.style.display = "none";
    }
}

const paragraphs = document.querySelectorAll("p");
for(elem of paragraphs){
    console.log(elem.innerHTML);
    elem.style.color = randomColor();

    if (elem.className != ""){
        console.log(elem.className);
        elem.style.color = "black";

    }
}

console.log(anchor);