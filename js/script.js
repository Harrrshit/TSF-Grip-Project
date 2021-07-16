const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navigation__links");
const links = document.querySelectorAll(".navigation__links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});