let divGeneral = document.createElement("div");

let titlePage = document.createElement("h1");
titlePage.innerText = "Primera pagina hecha con JavaScript";

let subtitlePage = document.createElement("h2");
subtitlePage.innerText = "prueba numero 1";

console.log(titlePage.textContent);

console.log(subtitlePage.textContent);

let img = document.createElement('img');
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8xubIAN1uM2xEeGTCxUT7Au9u6KuZfOyZY6-fboeF7ISVrMMd-Znqd-NYm1c3_2nR44&usqp=CAU';

let descriptionOne = document.createElement("p");
descriptionOne.innerText = "La bebecita bebe lean";

let elementosHTML = [titlePage, subtitlePage, img, descriptionOne];

elementosHTML.forEach((element) => {
    divGeneral.appendChild(element);
});

console.log(titlePage.nextElementSibling);

console.log(subtitlePage.previousSibling);

document.body.appendChild(divGeneral);

console.log(document.body.childNodes);
console.log(divGeneral.childNodes);

function add_Img(){
    let img = document.createElement('img');
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8xubIAN1uM2xEeGTCxUT7Au9u6KuZfOyZY6-fboeF7ISVrMMd-Znqd-NYm1c3_2nR44&usqp=CAU';
document.getElementById('body').appendChild(img);
}

