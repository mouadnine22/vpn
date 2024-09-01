/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const ham = document.getElementById("ham");

ham.addEventListener("click", () => {
    // Toggle between hiding and showing the menu
    navMenu.classList.toggle("nav-hidden");
    navMenu.classList.toggle("nav-visible");
    
    // Optionally toggle the hamburger icon to a close icon
    ham.classList.toggle("ri-close-line");
});

/*
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left.[0]")
        ham.classList.toggle('ri-close-large-line') 
    })
})

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/