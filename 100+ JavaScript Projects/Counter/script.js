window.onload = function() {

    const decrease = document.getElementById("decrease-button")
    const reset = document.getElementById("reset-button")
    const increase = document.getElementById("increase-button")
    const displayNumber = document.getElementById("displayNumber")

    decrease.onclick = function() {
        displayNumber.innerHTML --
    }

    reset.onclick = function() {
        displayNumber.innerHTML = 0 
    }
    
    increase.onclick = function() {
        displayNumber.innerHTML ++
    }
}