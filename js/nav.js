let navToggle = document.getElementById('nav-toggle');
let navList = document.getElementById('nav-list');

let toggleMenu = function(){
    navToggle.classList.toggle('fa-xmark');
    navList.classList.toggle('visible');
}

navToggle.addEventListener('click', toggleMenu);