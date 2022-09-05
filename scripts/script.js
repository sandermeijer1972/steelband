const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

const showMenu = () => {
    menu.classList.toggle('showmenu');
};

hamburger.addEventListener('click', showMenu);
