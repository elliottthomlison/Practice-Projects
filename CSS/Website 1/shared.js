const backdrop = document.querySelector(".backdrop");
const planButton = document.querySelectorAll(".plan button")
const modal = document.querySelector('.modal')

 for (let i=0; i < planButton.length; i++) {
     planButton[i].addEventListener('click', function()) {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
     }
 }