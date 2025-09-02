let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log("Cart items:", cart);

function renderproducts(item) {
  let container = document.getElementById("container-product");
  container.innerHTML = "";

  if (item.length === 0) {
    container.innerHTML = "<p>Your cart is empty 🛒</p>";
    return;
  }

  cart.forEach((item) => {
    if (!item.quantity || isNaN(item.quantity)) {
      item.quantity = 1;
    }
    let card = document.createElement("div");
    card.classList.add("productCard");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="product-img">

      <h2 class="title">${item.title}</h2>
      <p class="price-style" id="price-${item.id}">$${item.price * item.quantity}</p>
      <p class="desc">${item.description.slice(0, 40)}...</p>
      <div class="quantity-control">
        <button onclick="decreaseQty(${item.id})">-</button>
        <span id="qty-${item.id}">${item.quantity}</span>
        <button onclick="increaseQty(${item.id})">+</button>
      </div>

      <button class="btn-remove" onclick="removeFromCart(${
        item.id
      })">❌ Remove</button>
    `;
    container.append(card);
  });
}
// increase quantity
function increaseQty(id) {
  let product = cart.find((item) => item.id === id);
  if (product) {
    product.quantity += 1;
    document.getElementById(`qty-${id}`).innerText = product.quantity;
    document.querySelector(`#price-${id}`).innerText =
      "$" + product.price * product.quantity; 

    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

// Decrease quantity
function decreaseQty(id) {
  let product = cart.find((item) => item.id === id);
  if (product && product.quantity > 1) {
    product.quantity -= 1;
    document.getElementById(`qty-${id}`).innerText = product.quantity;
    document.querySelector(`#price-${id}`).innerText =
      "$" + product.price * product.quantity; 

    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderproducts(cart);
}

renderproducts(cart);
// search item functionality
function searchItem() {
  let search = document.getElementById("search-input");

  search.addEventListener("keyup", () => {
    let lowerCase = search.value.toLowerCase();
    console.log("products", cart);
    let searchedItem = cart.filter((item) => {
      return item.title.toLowerCase().includes(lowerCase);
    });
    console.log("searched", searchedItem);
    renderproducts(searchedItem);
  });
}
searchItem();
