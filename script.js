// Toggle the menu visibility when the hamburger icon is clicked
document.getElementById('mobile-menu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show-menu');
});
