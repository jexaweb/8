import { cheangeBasket } from "./bakset.js ";
import { updatecartUI } from "./updateUI.js";
const localProducts = JSON.parse(localStorage.getItem("products"));

if (localProducts) {
  cheangeBasket(localProducts);
  updatecartUI(localProducts);
}
