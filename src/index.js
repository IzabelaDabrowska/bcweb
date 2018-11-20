window.onload = function () {

    var hamburger = document.getElementById('hamburger');
    var mainContent = document.getElementById('main-content');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
        mainContent.classList.toggle('expanded');
    })
};