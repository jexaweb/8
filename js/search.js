// const searchText = document.getElementById("search-text");
// const ul = document.getElementById("product-list");

// searchText.addEventListener("input", () => {
//   Array.from(ul.children).forEach((item) => {
//     if (
//       item
//         .querySelector(".card-title")
//         .textContent.toLowerCase()
//         .includes(searchText.ariaValueMax.toLowerCase())
//     ) {
//       item.style.display = "block";
//       console.log(1);
//     } else {
//       item.style.display = "none";
//       console.log(2);
//     }
//   });
// });

const searchText = document.getElementById("search-text");
const ul = document.getElementById("product-list");
searchText.addEventListener("input", () => {
  Array.from(ul.children).forEach((item) => {
    if (
      item
        .querySelector(".card-title")
        .textContent.toLowerCase()
        .includes(searchText.value.toLowerCase())
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
