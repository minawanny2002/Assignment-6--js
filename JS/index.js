
import { UI } from './ui.js';

const navbarLinks = document.querySelectorAll('.nav-link');
export const rowHTML = $('#row-HTML');
export const detailsSection = $('.details-section');
export const spinner = $('.spinner');


// Handling Fixed Navbar
$(document).ready(function () {
  const navBar = $('#nav');
  const navPositionTop = $('#nav').offset().top;
  window.addEventListener('scroll', function () {
    const scrollBarPosition = $(window).scrollTop();

    if (scrollBarPosition >= navPositionTop) {
      navBar.addClass('fixed-nav');
    }
    else {
      console.log("monaaa")
      navBar.removeClass('fixed-nav');
    }
  })
})


// document.addEventListener('DOMContentLoaded', function () {
//   var navBar = document.getElementById('nav');
//   var sticky = navBar.offsetTop;
//   window.addEventListener('scroll', function () {
//     if (window.pageYOffset >= sticky) {
//       navBar.classList.add('fixed');
//     } else {
//       navBar.classList.remove('fixed');
//     }
//   });
// });



const newUI = new UI();
await newUI.displayingData('MMORPG');
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', function () {
    newUI.displayingGameDetails(card.getAttribute('id'));
  })
})







navbarLinks.forEach(element => {
  // Handling Active Tabs in Navbar
  element.addEventListener('click', async function (e) {
    navbarLinks.forEach(item => {
      item.classList.remove('active');
    })
    element.classList.add('active');


    //Displaying Games By Catgeory
    const newUI = new UI();
    await newUI.displayingData(e.target.innerHTML);


    //Displaying Game Details  
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', function () {
        newUI.displayingGameDetails(card.getAttribute('id'));
      })
    })
  })
});












