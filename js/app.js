import getData from "./requst.js";
import { updateUI } from "./updateUI.js";
import "./search.js";

const bilEl = document.getElementById("bil");

let counter = 30;
bilEl.addEventListener("click", async () => {
  getData(`https://dummyjson.com/products?limit=${(counter += 30)}`)
    .then((data) => updateUI(data))
    .catch((error) => console.log(error));
});

getData("https://dummyjson.com/products")
  .then((data) => updateUI(data))
  .catch((error) => console.log(error));
