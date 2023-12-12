let wilson = ["Noé", "Julien", "Otman", "Aurélien", "Winona", "Alexis", "Damien", "Dylan", "Ugur", "Jérémy", "Mathias", "Maoro", "Robin", "Nicolas", "Stacy", "Alice", "Denis", "Giuseppe", "Alexis", "Cassidy", "Huseyin", "Thomas", "Marvin", "Hanen", "Oksana", "Joshua"];

function randomNB(max){
    return Math.floor(Math.random() * max);
}

wilson.sort(() => 0.5 - Math.random());


const newSection = document.createElement("section");
let currentArticle = document.querySelector("article");
currentArticle.appendChild(newSection);

for (elem of wilson){
    let newLearner = document.createElement("p");
    let newText = document.createTextNode(elem);
    newLearner.appendChild(newText);
    newSection.appendChild(newLearner);

    let lightness = randomNB(100);

    let chosenColor = `hsl(${randomNB(360)}, ${randomNB(100)}%, ${lightness}%)`;

    newLearner.style.backgroundColor = chosenColor;

    if (lightness < 50){
        newLearner.style.color = "lightgray";
    }
}