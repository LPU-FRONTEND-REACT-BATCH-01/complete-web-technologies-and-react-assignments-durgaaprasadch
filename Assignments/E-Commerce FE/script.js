const output = document.getElementById("output");

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ]));
}

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}


function showSection(section) {
  if (section === "products") {
    showProducts();
  } else if (section === "cart") {
    showCart();
  }
}

function showProducts() {
  const products = JSON.parse(localStorage.getItem("products"));
  output.innerHTML = "<h2>Products</h2>";

  products.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;

    output.appendChild(div);
  });
}

function addToCart(id) {
  const products = JSON.parse(localStorage.getItem("products"));
  const cart = JSON.parse(localStorage.getItem("cart"));

  const product = products.find(p => p.id === id);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}

function showCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  output.innerHTML = "<h2>My Cart</h2>";

  if (cart.length === 0) {
    output.innerHTML += "<p>Cart is empty</p>";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    output.appendChild(div);
  });

  const totalDiv = document.createElement("h3");
  totalDiv.innerText = "Total: ₹" + total;

  output.appendChild(totalDiv);
}


function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart"));

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  showCart();
}
function goHome() {
  output.innerHTML = "";
}