
let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wish = JSON.parse(localStorage.getItem("wish")) || [];

// fetching API
async function loadProducts() {
  let a = await fetch("https://fakestoreapi.com/products");
  products = await a.json();
  console.log("All products:", products);
  renderproducts(products);
  searchItem(); 
}

// Rendering the product
function renderproducts(products) {
  let container = document.getElementById("container-product");
  container.innerHTML = "";
  products.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("productCard");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="product-img">

      <h2 class="title">${item.title}</h2>
      <p class="price">$${item.price}</p>
      <p class="desc">${item.description.slice(0, 40)}...</p>

      <button class="btn-cart" onclick="addcart(${item.id})">🛒 Add to Cart</button>
      <button class="btn-wishlist" onclick="wishlist(${item.id})">❤️ Add to Wishlist</button>
    `;
    container.append(card);
  });
}

// Add to cart 
function addcart(id) {
  let newcart = products.filter((data) => {
    return data.id == id;
  })[0];
  let already = cart.find((item) => {
    return item.id == id;
  });
  if (already) {
    already.quantity = 1;
    alert("Already in the cart");
    return;
  }
  cart.push(newcart);

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${newcart.title} added to cart`);
  console.log("confirm cart", cart);
}

// Add to wishlist 
function wishlist(id) {
  let newwish = products.filter((data) => {
    return data.id == id;
  })[0];
  let already = wish.find((item) => {
    return item.id == id;
  });
  if (already) {
    already.quantity = 1;
    alert("Already in the wishlist");
    return;
  }
  wish.push(newwish);

  localStorage.setItem("wish", JSON.stringify(wish));
  alert(`${newwish.title} added to wishlist`);
  console.log("confirm wishlist", wish);
}

// search item functionality
function searchItem() {
  let search = document.getElementById("search-input");

  search.addEventListener("keyup", () => {
    let lowerCase = search.value.toLowerCase();
    console.log("products", products);
    let searchedItem = products.filter((item) => {
      return item.title.toLowerCase().includes(lowerCase);
    });
    console.log("searched", searchedItem);
    renderproducts(searchedItem);
  });
}

loadProducts();



