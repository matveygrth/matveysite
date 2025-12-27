const app = () => {
    const bodey = document.querySelector('body');
    const menu = document.querySelector('.menu-icon');

    menu.addEventListener('click', () => {
        bodey.classList.toggle('nav-active');
    });
};

app();