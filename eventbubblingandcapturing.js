let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("parent (capture)");
  true;
});
child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("child click");
});
