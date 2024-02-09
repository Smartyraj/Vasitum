// Description: Main JavaScript file for the application.
// Used by: src/index.html

const menu = document.querySelector('.hamburgerMenu');
const hide = document.getElementById('hide');
const leftSidebar = document.querySelector('.leftSidebar');

menu.addEventListener('click', () => {
    leftSidebar.classList.toggle('show');
});

hide.addEventListener('click', () => {
    leftSidebar.classList.remove('show');
});