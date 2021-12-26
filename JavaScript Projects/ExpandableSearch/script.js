window.onload = function () {
  const searchButton = document.getElementById("Search-btn");
  const searchInput = document.querySelector(".search-input");
  searchInput.classList.remove("active-search")

  searchButton.addEventListener("click", function () {
    searchInput.classList.toggle("active-search");
  });

  // `document.querySelector("main").addEventListener("click", () => {
  //   searchInput.classList.remove("active-search")
  // })`
};
