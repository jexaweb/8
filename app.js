const template = document.querySelector("template");
const productlist = document.getElementById("product-list");
const bilEl = document.getElementById("bil");
function updateUI({ products }) {
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

    img.src = thumbnail;
    cardTitle.textContent = title;
    description.textContent = _description;
    price.textContent = `${_price}$`;
    productlist.appendChild(clone);
  });
}
async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}
bilEl.addEventListener("click", async () => {
  const data = await getData("https://dummyjson.com/products?limit=30");
  updateUI(data);
});

getData("https://dummyjson.com/products")
  .then((data) => updateUI(data))
  .catch((error) => console.log(error));
