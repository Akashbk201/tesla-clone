let openNav = document.getElementById("open-menu");
let closeNav = document.getElementById("close-menu");
let navOutput = document.getElementById("mobile-nav");
let mainBody = document.getElementsByClassName("dev-main-sec");

openNav.addEventListener("click", () => {
  navOutput.style.display = "block";
  openNav.style.display = "none";
  closeNav.style.display = "block";

  // Loop through all elements with class "dev-main-sec"
  for (let i = 0; i < mainBody.length; i++) {
    mainBody[i].classList.add("blur-sm");
  }
});

closeNav.addEventListener("click", () => {
  navOutput.style.display = "none";
  closeNav.style.display = "none";
  openNav.style.display = "block";

  // Loop through all elements with class "dev-main-sec"
  for (let i = 0; i < mainBody.length; i++) {
    mainBody[i].classList.remove("blur-sm");
  }
});
