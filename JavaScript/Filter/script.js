window.onload = function() {
  const cakesButton = document.getElementById("cakesButton")
  const cupcakesButton = document.getElementById("cupcakesButton")
  const doughnutsButton = document.getElementById("doughnutsButton")
  const resetButton = document.getElementById("reset")

  cakesButton.onclick = function() {
    const doughnuts = document.getElementsByClassName("doughnut")
    for(let i = 0; i < doughnuts.length; i++){
      doughnuts[i].style.background = "white"
    }
    const cupcakes = document.getElementsByClassName("cupcake")
    for(let i = 0; i < cupcakes.length; i++){
      cupcakes[i].style.background = "white"
    }
    const cakes = document.getElementsByClassName("cake")
    for(let i = 0; i < cakes.length; i++){
      cakes[i].style.background = "red"
    }
  }

  cupcakesButton.onclick = function() {
    const doughnuts = document.getElementsByClassName("doughnut")
    for(let i = 0; i < doughnuts.length; i++){
      doughnuts[i].style.background = "white"
    }
    const cupcakes = document.getElementsByClassName("cupcake")
    for(let i = 0; i < cupcakes.length; i++){
      cupcakes[i].style.background = "blue"
    }
    const cakes = document.getElementsByClassName("cake")
    for(let i = 0; i < cakes.length; i++){
      cakes[i].style.background = "white"
    }
  }

  doughnutsButton.onclick = function() {
    const doughnuts = document.getElementsByClassName("doughnut")
    for(let i = 0; i < doughnuts.length; i++){
      doughnuts[i].style.background = "green"
    }
    const cupcakes = document.getElementsByClassName("cupcake")
    for(let i = 0; i < cupcakes.length; i++){
      cupcakes[i].style.background = "white"
    }
    const cakes = document.getElementsByClassName("cake")
    for(let i = 0; i < cakes.length; i++){
      cakes[i].style.background = "white"
    }
  }

  resetButton.onclick = function() {
    const doughnuts = document.getElementsByClassName("doughnut")
    for(let i = 0; i < doughnuts.length; i++){
      doughnuts[i].style.background = "green"
    }
    const cupcakes = document.getElementsByClassName("cupcake")
    for(let i = 0; i < cupcakes.length; i++){
      cupcakes[i].style.background = "blue"
    }
    const cakes = document.getElementsByClassName("cake")
    for(let i = 0; i < cakes.length; i++){
      cakes[i].style.background = "red"
    }
  }

}