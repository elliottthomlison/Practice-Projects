window.onload = function() {
  const modalOpen = document.getElementById("modal-open")
  const modalClose = document.getElementById("modal-close")
  const modalBody = document.getElementById("modal")


  modalOpen.onclick = function() {
    modalOpen.style.display = "none"
    modalBody.style.display = "block"
  }


  modalClose.onclick = function test() {
    modalOpen.style.display = "block"
    modalBody.style.display = "none"
  }

}