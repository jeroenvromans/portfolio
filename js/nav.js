// navToggle is de hamburger en het kruis element. De navList zijn de menu opties.
let navToggle = document.getElementById('nav-toggle');
let navList = document.getElementById('nav-list');

// Deze functie laat de menu opties zien of verbergd ze. De hamburger wordt een kruis
let toggleMenu = function(){
    navToggle.classList.toggle('fa-xmark');
    navList.classList.toggle('visible');
}

// event voor hamburger/kruis
navToggle.addEventListener('click', toggleMenu);

// Alle menu items in een array.
const menuItems = ['menu-about-me', 'menu-projects', 'menu-skills', 'menu-contact'];
// Alle DOM elementen voor de menu-items
const menuElem = [];
// Alle contentblokken
const content = ['about me', 'projects', 'skills', 'contact']

// Vullen van de DOM elementen
menuItems.forEach(function(item){
    menuElem.push(document.getElementById(item));
})

// Functie voor het weergeven van de verschillende contentblokken (1 tegelijk)
let reloadContent = function(event){
    // Content verbergen
    content.forEach(function(id){
        let contentId = document.getElementById(id);
        contentId.classList.add('hide');
    })
    // Gevraagde content tonen
    let targetName = event.target.innerHTML.toLowerCase();
    let target = document.getElementById(targetName)
    target.classList.remove('hide');
    // Sluiten uitklapmenu (indien mobiel)
    let mobile = navToggle.classList.value;
    if(mobile.search('fa-xmark') > -1){
        toggleMenu();
    }
}

// Events voor menu-opties
let evtHandler = function(elem){
    elem.addEventListener('click', reloadContent);
    }

menuElem.forEach(evtHandler);