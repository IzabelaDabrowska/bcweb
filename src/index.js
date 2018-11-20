window.onload = function () {

    var hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
    })
};