window.onload = function() {
    const increase = document.querySelector('.btn-success')
    const decrease = document.querySelector('.btn-danger')
    const zero = document.querySelector('.btn-primary')
    const displayNumber = document.querySelector('#number')

    increase.onclick = function() {
        displayNumber.innerHTML ++
    }

    decrease.onclick = function() {
        displayNumber.innerHTML --
    }

    zero.onclick = function() {
        displayNumber.innerHTML = 0
    }


}