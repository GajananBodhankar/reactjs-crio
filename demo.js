document.querySelector("p").addEventListener("click", (e) => {
  alert("clicked p");
  e.stopPropagation();
});

document.querySelector(".container").addEventListener("click", () => {
  alert("clicked on conatiner");
});
