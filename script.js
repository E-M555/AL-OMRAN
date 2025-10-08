// Script to toggle navigation menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the "active" class to show/hide the menu
});