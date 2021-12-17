window.onload = function () {
  const buttons = document.querySelectorAll(".btn");
  const imageDIV = document.querySelector(".img-container");
  let counter = 0;

  const images = [
    "https://static.toiimg.com/photo/msid-72295960/72295960.jpg?545889",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWedyCCbT_HDnqjBoXd17gQka2EoNVonFjnXSTC5ONcwHAdYfZlzH2m6GDsK5jIgV-edw&usqp=CAU",
    "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
    "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
  ];

  buttons.forEach(function (button) {
    button.onclick = function () {
      if (button.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = images.length - 1;
        }
        imageDIV.style.backgroundImage = `url('./img/${images[counter]}.jpeg')`;
      }
      if (button.classList.contains("btn-right")) {
        counter++;
        if (counter > images.length - 1) {
          counter = 0;
        }
        imageDIV.style.backgroundImage = `url('./img/${images[counter]}.jpeg')`;
      }
    };
  });
};
