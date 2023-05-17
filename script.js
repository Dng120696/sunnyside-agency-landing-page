'use strict';

const menu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu-links');

menu.addEventListener('click',() => {
    menuLinks.classList.toggle('show') ;
})