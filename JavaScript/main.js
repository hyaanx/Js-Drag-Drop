let button = document.querySelector(".btn");
let input = document.querySelector("input");
let boxes = document.querySelectorAll(".box");

button.addEventListener("click", () => {
  let text = input.value;
  if (text) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.textContent = text;
    boxes[0].appendChild(newItem);
    input.value = "";
  }

  drageItem();
});
let drag;
function drageItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.setAttribute("draggable", true);
    item.addEventListener("dragstart", () => {
      item.classList.add("dragging");
      drag = item;
    });
    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
      drag = null;
    });

    boxes.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.style.background = "#d3d3d3";
        console.log("wassim");
      });
      box.addEventListener("dragleave", () => {
        box.style.background = "";
      });
      box.addEventListener("drop", () => {
        box.style.background = "";
        if (drag) {
          box.appendChild(drag);
        }
      });
    });
  });
}
