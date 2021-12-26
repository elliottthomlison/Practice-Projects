window.onload = function() {
   
    const checkbox = document.getElementById("checkbox")
    const submitButton = document.querySelector("button")
    const options = document.querySelectorAll('.grid-item')
    const selectColor = document.getElementById('selectColor')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')
    
    checkbox.disabled = true
    submitButton.disabled = true

    options.forEach(function(options){
        const color = getRandomColor()

        options.style.backgroundColor = color;
        options.innerHTML = color;
        selectColor.innerHTML = color;
    })

    function getRandomColor() {
        const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += hexValues[Math.floor(Math.random() * 16)]
        }
        return color;
    }

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            if (option.innerHTML === selectColor.innerHTML) {
                checkbox.disabled = false;
                submitButton.disabled = false
                alert ("You are human!")
            } else {
                alert ("Please verify that you are human!")
                location.reload(true)
            }
        })
    })
}

