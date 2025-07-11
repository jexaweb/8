let products = [];
const pre = document.getElementById("products-amount");

const cheangeBasket = () => {
  let amount = 0;
  amount = products.forEach((product) => {
    amount += product.amount;
  });
  pre.textContent = amount;
};

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
    cheangeBasket();
  }
  console.log(products);
};
