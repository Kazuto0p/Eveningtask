const cartContainer = document.getElementById("cart-container");
const totalPriceElement = document.getElementById("total-price");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCartItems() {
  cartContainer.innerHTML = ''; 

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty!</p>";
    return;
  }

  let total = 0;


  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <div class="card">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.title}" width="100" height="100" />
        </div>
        <div class="cart-item-details">
          <h3>${item.title}</h3>
          <p>Price: ₹${item.price}</p>
          <div class="quantity">
            <button class="cart-button" onclick="updateQuantity(${item.id}, 'decrease')">-</button>
            <span>${item.qty}</span>
            <button class="cart-button" onclick="updateQuantity(${item.id}, 'increase')">+</button>
          </div><br>
          <button class="cart-button" onclick="removeItem(${item.id})">Remove</button>
        </div>
      </div>  
    `;

    cartContainer.appendChild(cartItem);


    total += item.price * item.qty;
  });


  totalPriceElement.textContent = `Total: ₹${total}`;
}


function updateQuantity(id, action) {
  const item = cart.find(item => item.id === id);
  if (item) {
    if (action === "increase") {
      item.qty += 1;
    } else if (action === "decrease" && item.qty > 1) {
      item.qty -= 1;
    }


    localStorage.setItem("cart", JSON.stringify(cart));


    renderCartItems();
  }
}


function removeItem(id) {

  cart = cart.filter(item => item.id !== id);


  localStorage.setItem("cart", JSON.stringify(cart));


  renderCartItems();
}


function payment() {
  alert("Proceeding to payment...");

}


renderCartItems();
