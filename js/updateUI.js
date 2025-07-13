import { addProduct } from "./bakset.js";

const template = document.querySelector("template");
const productlist = document.getElementById("product-list");
const cardList = document.getElementById("cart-list");
const cardTemplate = document.getElementById("card-template");

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

    a.href = `./html/about.html?id=${id}`;

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

// let counter = 30;
// const bilEl = document.getElementById("bil");

// bilEl.addEventListener("click", async () => {
//   getData(`https://dummyjson.com/products?limit=${(counter += 30)}`)
//     .then((data) => updateUI(data))
//     .catch((error) => console.log(error));
// });

let counter = 30;

window.addEventListener("DOMContentLoaded", () => {
  const bilEl = document.getElementById("bil");

  if (bilEl) {
    bilEl.addEventListener("click", async () => {
      getData(`https://dummyjson.com/products?limit=${(counter += 30)}`)
        .then((data) => updateUI(data))
        .catch((error) => console.log(error));
    });
  }
});

function updatecartUI(products) {
  products.forEach((product) => {
    const {
      id,
      title,
      price: _price,
      thumbnail,
      description: _description,
    } = product;
    const clone = cardTemplate.content.cloneNode(true);

    const imgs = clone.querySelector(".product-img");
    const name = clone.querySelector(".name");
    const description = clone.querySelector(".decoration");
    const priceEl = clone.querySelector(".price");
    const amountEl = clone.querySelector(".amount");

    imgs.src = `${product.thumbnail}`;
    priceEl.textContent = _price;
    name.textContent = title;
    cardList.appendChild(clone);
  });
}

export { updateUI, updateUIAboutUI, updatecartUI };
