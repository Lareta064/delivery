$(document).ready(function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobMenu = document.querySelector('.header-menu');
    const overlayBlock = document.querySelector('#overlay');
    const bodyEl = document.body;
    menuToggle.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            mobMenu.classList.remove('active');
            overlayBlock.classList.remove('active');
            bodyEl.classList.remove('active');
        } else {
            this.classList.add('active');
            mobMenu.classList.add('active');
            overlayBlock.classList.add('active');
            bodyEl.classList.add('active');
        }
    });
    window.addEventListener('resize', function () {
        menuToggle.classList.remove('active');
        overlayBlock.classList.remove('active');
        bodyEl.classList.remove('active');
        mobMenu.classList.remove('active');
    })
})