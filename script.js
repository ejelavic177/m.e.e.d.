document.getElementById('menuButton').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var menuButton = document.getElementById('menuButton');
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.style.display = 'none';
    }
});

document.getElementById('beeArrow').addEventListener('click', function() {
    window.scrollBy({ 
        top: window.innerHeight, 
        behavior: 'smooth' 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const textElements = document.querySelectorAll('.text');
});