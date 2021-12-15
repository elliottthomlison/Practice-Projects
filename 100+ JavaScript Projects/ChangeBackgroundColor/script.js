//need button to flip through colors randomly and that links up with html
//need that color change to be tied to the body in the html
window.onload = function() {

    let colorChanger = document.getElementById("changer")

    colorChanger.onclick = function changer() {
        console.log('test')
        // colorFinder()
        colorFinderHex()
    }

    //if using the names of colors
    colorFinder = () => {
        let position = Math.floor(Math.random() * 4)
        let color = ["red", "blue"]
        if (position > 2) {
            document.body.style.backgroundColor = color[1]
        } else {
            document.body.style.backgroundColor = color[0]
        }
    }

    //if using hex
    colorFinderHex = () => { 
        let position = Math.floor(Math.random() * 4)
        let a = (Math.floor(Math.random() * 90) + 10).toString()
        let b = (Math.floor(Math.random() * 90) + 10).toString() 
        let c = (Math.floor(Math.random() * 90) + 10).toString()
        let color = '#' + a + b + c 
        document.body.style.backgroundColor = color
    }

    
}