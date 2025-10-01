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
  // drageItem();
});

// The first way to do it using native JavaScript

/*
Advantages:

• Full control: You can customize every aspect of the drag-and-drop behavior.
• No external dependencies: No need to load extra libraries, so your project stays lightweight.
• Good for learning: Helps you understand how drag-and-drop events work in the browser.

Disadvantages:

• More code: Requires a lot of manual event handling and logic.
• Harder to maintain: More complex and error-prone, especially as your UI grows.
• Limited features: Advanced features (like animation, group sorting, filtering) require extra work to implement. 
*/

/* 
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
 */


// The second way to do it using SortableJS

/*
Advantages:

• Easy to use: Minimal code to get powerful drag-and-drop functionality.
• Feature-rich: Built-in support for animation, multi-list sorting, filtering, and more.
• Reliable: Well-tested and widely used, so fewer bugs and edge cases.

Disadvantages:

• External dependency: You must include and load the SortableJS library.
• Less low-level control: Some very custom behaviors may be harder to implement or require workarounds.
• Slightly larger bundle size due to the library.
 */
document.addEventListener("DOMContentLoaded", function () {
  boxes.forEach((box) => {
    new Sortable(box, {
      group: "shared", // يسمح بنقل العناصر بين الصناديق
      animation: 150,
      draggable: ".item", // فقط العناصر التي تحمل الكلاس item قابلة للسحب
      filter: "h3", // تجاهل العنوان
      preventOnFilter: false,
    });
  });
});
