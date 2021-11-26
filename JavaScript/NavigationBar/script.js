// function openNav() {
//     const navStatus = 0;    
//     const navContainer = document.querySelector(".container");
//     const navMenu = document.querySelector(".nav-menu")

//     if (!navStatus) {
//         navContainer.style.display = "block";
//         navMenu.style.display = "block"
//         navStatus = 1;

//     } else {
//         navContainer.style.display = "none";
//         navMenu.style.display = "none"
//         navStatus = 0;
//     }
// }

let navStatus = 0;    

function openNav() {
    if(!navStatus) {
        $('.container').css('width', '100%')
        $('li').css('display', 'block')
        navStatus = 1
    } else {
        $('.container').css('width', '0')
        $('li').css('display', 'none')
        navStatus=0
    }
}