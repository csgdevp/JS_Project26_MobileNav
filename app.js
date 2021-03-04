const contents = document.querySelectorAll(".content");
const lis = document.querySelectorAll("nav ul li");

lis.forEach((li, idx) => {
  li.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    li.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllContents() {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
}
function hideAllItems() {
  lis.forEach((li) => li.classList.remove("active"));
}
