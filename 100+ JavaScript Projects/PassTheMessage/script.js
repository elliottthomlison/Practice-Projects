window.onload = function () {
  const submit = document.getElementById("submit");

  submit.onclick = function (input) {
    input.preventDefault();

    let message = document.getElementById("message").value;
    document.getElementById("lastMessage").innerHTML = message;
    clearFields();
  };

  const clearFields = () => {
    document.getElementById("message").value = "";
  };
};
