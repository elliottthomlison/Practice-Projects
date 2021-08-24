function display(value) {

  //the value of the new button will be added 
  document.getElementById('textarea').value += value
}

function calculate() {
  const value = document.getElementById('textarea').value
  const answer = eval(value)
  document.getElementById('textarea').value = answer
}