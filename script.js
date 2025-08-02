// Sample product data
const products = [
  { name: "Tiger", price: 390000, image: "kartik-iyer-DJ4vjcD0s0I-unsplash.jpg" },
  { name: "Lion", price: 510000, image: "jean-wimmerlin-FC4GY9nQuu0-unsplash.jpg" },
  { name: "Dogesh Bhai", price: 999999, image: "20240325_131006.jpg" },
  { name: "Gorilla", price: "free optional", image: "gorrila.jpg" }
];

let cart = [];

// Load all products to the page
function displayProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

// Add selected product to the cart
function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

// Update cart display
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = total;
}

// Handle Buy button click
function buyNow() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert("✅ Purchase complete! Thank you for shopping.");
  cart = [];
  updateCart();
}

// Start the app
displayProducts();






