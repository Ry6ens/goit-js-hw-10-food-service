import { labelToName } from 'whatwg-encoding';
import menu from './menu.json';
import itemsTemplate from './templates/gallery-items.hbs';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
galleryRef.insertAdjacentHTML('beforeend', markup);

// Change color theme
const page = document.querySelector('.page')
const themeButton = document.querySelector('#theme-switch-toggle')
const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === theme.DARK) {
        themeButton.setAttribute('checked', true)
        page.classList.toggle(theme.DARK)
        }
})

themeButton.onclick = function() {
    if (!themeButton.getAttribute('checked')) {
        themeButton.setAttribute('checked', true)
        localStorage.setItem('theme', theme.DARK)
        page.classList.toggle(theme.DARK)
        page.classList.remove(theme.LIGHT)
    } else {
        themeButton.removeAttribute('checked')
        page.classList.remove(theme.DARK)
        page.classList.toggle(theme.LIGHT)
        localStorage.setItem('theme', theme.LIGHT)
    }  
  };


  