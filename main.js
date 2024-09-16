function openSearchModal() {
  document.getElementById("modal").style.display = "block";
}

function closeSearchModal() {
  document.getElementById("modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => createProductCards(data))
    .catch((error) => console.error("Error fetching products:", error));
});

function createProductCards(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear existing content

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h2>${product.title}</h2>
          <p>${product.description.substring(0, 50)}...</p>
          <button class="cardButton">See More</button>
      `;
    container.appendChild(card);
  });
}
