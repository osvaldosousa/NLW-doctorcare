const header = document.querySelector('.main-header');
const main = document.querySelector('main');
const btnTop = document.querySelector('.btn-goTop');

function scrollActive() {
  changeHeader()
  showButtonGoTop()
};

function changeHeader() {
  if (scrollY > 20) {
    header.classList.add('-scroll')
    main.classList.add('-scroll')
  } else {
    header.classList.remove('-scroll')
    main.classList.remove('-scroll')
  }
};

function showButtonGoTop() {
  if (scrollY >= 450) {
    btnTop.classList.add('-on')
  } else {
    btnTop.classList.remove('-on')
  }
};

btnTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', scrollActive);

let show = true;
const menuMobile = document.querySelector(".menu");
const menuToggle = menuMobile.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial"
  menuMobile.classList.toggle("open", show)
  show = !show;
});


// onScroll()

// function onScroll() {
//   showNaveOnSccroll() 
//   showBackToTopButtonOnScroll()
// } 

// function showNaveOnSccroll() {
//   if (scrollY > 0) {     
//       navigation.classList.add('scroll') 
//     } else  {   
//       navigation.classList.remove('scroll')
//     }
// }

// function showBackToTopButtonOnScroll() {
//   if (scrollY > 550) {     
//       backToTopButton.classList.add('show');
//     } else  {   
//       backToTopButton.classList.remove('show');
//     }

// }

// function openMenu() {
//    document.body.classList.add('menu-expanded') 

// }

// function closeMenu() {
//   document.body.classList.remove('menu-expanded')
// }

// ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 700
// }).reveal(`
//    #home, 
//    #home img,
//    #home .stats,
//    #services,
//    #services header,
//    #services .card
//    #about,
//    about header,
//    #about, .content`)