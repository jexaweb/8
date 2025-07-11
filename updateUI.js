import { addProduct } from "./bakset.js";

const template = document.querySelector("template");
const productlist = document.getElementById("product-list");

function updateUI({ products }) {
  productlist.innerHTML = "";
  products.forEach((product) => {
    const {
      id,
      title,
      price: _price,
      thumbnail,
      description: _description,
    } = product;
    const clone = template.content.cloneNode(true);

    const img = clone.querySelector(".product-img");
    const cardTitle = clone.querySelector(".card-title");
    const description = clone.querySelector(".decoration");
    const price = clone.querySelector(".price");
    const a = clone.querySelector("a");
    const button = clone.querySelector(".buy-button");

    button.addEventListener("click", (e) => {
      e.preventDefault();
      addProduct(product);
    });

    a.href = `./about.html?id=${id}`;

    img.src = thumbnail;
    cardTitle.textContent = title;
    description.textContent = _description;
    price.textContent = `${_price}$`;
    productlist.appendChild(clone);
  });
}

function updateUIAboutUI(product) {
  console.log(product);
}

let counter = 30;
const bilEl = document.getElementById("bil");

bilEl.addEventListener("click", async () => {
  getData(`https://dummyjson.com/products?limit=${(counter += 30)}`)
    .then((data) => updateUI(data))
    .catch((error) => console.log(error));
});

export { updateUI, updateUIAboutUI };
