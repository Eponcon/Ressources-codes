var iconBurger = document.querySelector('.header-icone');
var liensMenu = document.querySelector('.menu');
var blcIcon = document.querySelector("#nav-toggle" );
var lienItem = document.querySelectorAll('.lien-menu');

iconBurger.addEventListener('click', toggleMenu);

for(i=0;i<lienItem.length; i++){
    lienItem[i].addEventListener("click", toggleMenu);    
}


//affiche les liens du menu//
function toggleMenu(){
    liensMenu.classList.toggle('visible');
    blcIcon.classList.toggle("active");
}

