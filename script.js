var iconBurger = document.querySelector('.header-icone');
var liensMenu = document.querySelector('.menu');
var blcIcon = document.querySelector("#nav-toggle" );
var lienItem = document.querySelectorAll('.lien-menu');
console.log(lienItem);

iconBurger.addEventListener('click', toggleMenu);

function toggleMenu(){
    liensMenu.classList.toggle('visible');
}

for(i=0;i<lienItem.length; i++){
    lienItem[i].addEventListener("click", toggleMenu);
}

blcIcon.addEventListener("click", burgerCroix);
function burgerCroix(){
    this.classList.toggle( "active" );
}

