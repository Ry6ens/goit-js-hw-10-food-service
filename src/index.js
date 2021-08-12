import './sass/main.scss';
import menu from './menu.json';
import itemsTemplate from './templates/gallery-items.hbs';

console.log(menu)

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
galleryRef.insertAdjacentHTML('beforeend', markup);