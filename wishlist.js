let wish = JSON.parse(localStorage.getItem("wish")) || [];
console.log("wish items:", wish);

function renderproducts(item) {
  let container = document.getElementById("container-product");
  container.innerHTML = "";

  if (item.length === 0) {
    container.innerHTML = "<p>Your wishlist is empty 🛒</p>";
    return;
  }

  wish.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("productCard");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="product-img">

      <h2 class="title">${item.title}</h2>
      <p class="price">$${item.price}</p>
      <p class="desc">${item.description.slice(0, 40)}...</p>

      <button class="btn-remove" onclick="removeFromwish(${item.id})">❌ Remove</button>
    `;
    container.append(card);

  });
}

function removeFromwish(id) {
  wish = wish.filter((item) => item.id !== id);
  localStorage.setItem("wish", JSON.stringify(wish));
  renderproducts(wish);
}

renderproducts(wish);
// search item functionality
function searchItem() {
  let search = document.getElementById("search-input");

  search.addEventListener("keyup", () => {
    let lowerCase = search.value.toLowerCase();
    console.log("products", wish);
    let searchedItem = wish.filter((item) => {
      return item.title.toLowerCase().includes(lowerCase);
    });
    console.log("searched", searchedItem);
    renderproducts(searchedItem);
  });
}
  searchItem()
