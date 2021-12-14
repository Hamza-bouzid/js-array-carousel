const items = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

const text = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.", "Lorem ipsum", "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,", "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"];

const fullSlide = document.querySelector(".full-slide"); // Seleziono Contenitore dell'immagine grande
const miniSlide = document.querySelector(".mini-slide"); // Seleziono Contenitore dell'immagini piccole

let carouselItems = ""; // Variable per salvare dati del for per le immagini grandi
let miniItems = ""; // Variable per salvatre dati del for per le immagini piccole
let elementActive = 1; // Contatore da usare per assegnare dinamicamente la classe active

for (let i = 0; i < items.length; i++) {
  carouselItems += `
  <div class="full-slide-item" id="item-${i}">
   <img src="${items[i]}" />
   <div class="text">
    <h3>${title[i]}</h3>
    <p>${text[i]}</p>
  </div>
  </div>
  `;
}

for (let i = 0; i < items.length; i++) {
  miniItems += `
  <div class="mini-slide-item" id="mini-${i}">
   <img src="${items[i]}" />
  </div>
  `;
}

fullSlide.innerHTML = carouselItems;
miniSlide.innerHTML += miniItems;

let carouselActive = document.getElementById("item-" + elementActive);
carouselActive.classList.add("full-active");

let miniActive = document.getElementById("mini-" + elementActive);
miniActive.classList.add("mini-active");
