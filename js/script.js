//VARIABLES

let burgerLine = document.querySelector('#burger-line');
let burgerMenu = document.querySelector('#burger-menu');
let body = document.body;

//BURGER
burgerLine.addEventListener('click', function (){
    burgerMenu.classList.toggle('active__sidebar');
    body.classList.toggle("overflow-hidden");
})