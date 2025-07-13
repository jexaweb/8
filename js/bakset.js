let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];
const pre = document.getElementById("products-amount");

export const cheangeBasket = (products) => {
  let amount = 0;
  products.forEach((product) => {
    amount += product.amount;
  });
  pre.textContent = amount;
};
if (products) {
  cheangeBasket(products);
}

export const addProduct = (p) => {
  let isAdded = products.find((product) => product.id == p.id);

  if (isAdded) {
    isAdded.amount += 1;
  } else {
    Toastify({
      text: "Mahsulot qo'shildi",
      className: "info",
      gravity: "bottom",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    products.push({ ...p, amount: 1 });
  }

  localStorage.setItem("products", JSON.stringify(products));
  cheangeBasket(products);
};
