window.addEventListener("load", function () {
  const elementsToAnimate = document.querySelectorAll(".fade-nav");
  elementsToAnimate.forEach((element) => {
    element.classList.add("loading");
  });
});

window.addEventListener("load", function () {
  const elementsToAnimate = document.querySelectorAll(".fade-in");
  elementsToAnimate.forEach((element) => {
    element.classList.add("loaded");
  });
});
