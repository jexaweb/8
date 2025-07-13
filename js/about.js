import getData from "./requst.js";
// import { updateUIAboutUI } from "./updateUI.js";

let id = new URLSearchParams(document.location.search).get("id");

const title = document.querySelector(".title");
const decoration = document.querySelector(".decoration");
const productImg = document.querySelector(".product-img");
const priceEL = document.querySelector(".price");
const cds = document.querySelector(".cds");
function updateUIAboutUI(product) {
  title.textContent = product.title;
  decoration.textContent = product.description;
  productImg.src = product.thumbnail;
  priceEL.textContent = product.price + "$";
}

cds.addEventListener("click", () => {
  laycBtn.classList.toggle("liked");

  if (laycBtn.classList.contains("liked")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
});

getData("https://dummyjson.com/products/" + id)
  .then((data) => updateUIAboutUI(data))
  .catch((error) => console.log(error));
