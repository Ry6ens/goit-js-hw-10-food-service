import { labelToName } from 'whatwg-encoding';
import menu from './menu.json';
import itemsTemplate from './templates/gallery-items.hbs';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
galleryRef.insertAdjacentHTML('beforeend', markup);

// Change color theme
const page = document.querySelector('.page')
const themeButton = document.querySelector('.theme-switch__toggle')
const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

themeButton.onclick = function() {
    let themeChecked = document.getElementById('theme-switch-toggle')
    if (themeChecked.getAttribute('checked')) {
        themeChecked.setAttribute('checked', true)
        page.classList.toggle(theme.LIGHT)
        localStorage.setItem('theme', theme.LIGHT)
    } else {
        themeChecked.removeAttribute('checked')
        page.classList.toggle(theme.DARK);
        localStorage.setItem('theme', theme.DARK)
    }  
  };

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('theme') === theme.LIGHT) {
        themeChecked.setAttribute('checked', true)
        document.body.classList.add(localStorage.getItem('theme'));
        }
  });