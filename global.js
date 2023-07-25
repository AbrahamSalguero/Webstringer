/*console.log("js running too");*/

var swiperMain = new Swiper(".swiper", {

  direction: 'horizontal',
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 100000,
  },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    }
  });

/*-----------------CONTACT SIDEBAR ACCORDION------- */
let contactSidebar = document.getElementsByClassName("block-title-background");
let i;

for (i = 0; i < contactSidebar.length; i++) {
  contactSidebar[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


  
 
/*----------------------SLIDER MINI------------------- */
var swiperFooter = new Swiper(".swiper-mini", {

  direction: 'horizontal',
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,
  },
    
    navigation: {
      nextEl: ".swiper-button-next-mini",
      prevEl: ".swiper-button-prev-mini",

    }
  });
 /*  <div class="swiper-button-prev">
        &nbsp;
    </div>
    <div class="swiper-button-next">
        &nbsp;
    </div>
  
  

    ---CON ESTO QUITO ESTILOS AL PRIMER ELEMENTO DEL MENU SUPERIOR 
 // Obtén el primer hijo del elemento padre
let primerHijo = document.querySelector('.region-info-sns-header .menu li:first-child');

// Cambia los estilos del primer hijo
primerHijo.style.background = 'white';


let secondChild = document.querySelector('.region-info-sns-header .menu li:first-child a');
secondChild.style.color = '#444';

// Agrega el evento mouseenter para el estado :hover
secondChild.addEventListener('mouseenter', function() {
 // secondChild.style.color = '#000';
  secondChild.style.background = 'white';
  secondChild.style.borderLeft = 'white';
  secondChild.style.borderRight = 'white';
});

// Agrega el evento mouseleave para revertir los estilos
secondChild.addEventListener('mouseleave', function() {
  secondChild.style.color = '#444';
  secondChild.style.fontWeight = '';
});*/

/*----------------------------------------- */
let activeP= document.getElementsByClassName("menu-item");

activeP.addEventListener('click', function(){
  activeP.style.color='blue';
 /* activeP.style.color='#006FB5';
  activeP.style.borderleft= '1px solid #0070b525';
  activeP.style.borderRight='1px solid #0070b525';*/
});




