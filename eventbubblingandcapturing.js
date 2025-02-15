let parent = document.getElementById("parent");
let child = document.getElementById("child");

child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("child click");
});
parent.addEventListener("click", () => {
  console.log("parent click");
});
