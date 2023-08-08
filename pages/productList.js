import { getProducts } from "../services/api.js";
import { deleteProduct } from "../services/api.js";
const card = document.querySelector(".shoes-container");

const url = window.location;
const collection = new URLSearchParams(url.search);
const currentCollection = collection.get("collection");

async function listProducts(collection) {
  const products = await getProducts();
  products.forEach((product) => {
    if (collection === null || product.coleccion === collection) {
      const template = `
        <a class="shoe-card" href="productDetail.html?id=${product.id}">
            <li>
                <img class="shoe-image" src="${product.imagen0}" alt="${
        product.nombre
      }" />
                <h2 class="shoe-name">${product.nombre}</h2>
                <p class="shoe-collection">${product.coleccion}</p>
                <p class="shoe-price">${product.precio} COP</p>
                </li>
                ${
                  url.pathname === "/pages/adminPanel.html"
                    ? `<button class="delete-button" id="${product.id}">Eliminar</button>`
                    : ""
                }
        </a>
        `;
      card.innerHTML += template;
    }
  });
}
listProducts(currentCollection);

//Botón eliminar 
const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", async (event) => {
    event.stopPropagation();

    const productId = deleteButton.getAttribute("data-id");

    try {
      const result = await deleteProduct(productId);
      if (result) {
        console.log("Producto eliminado:", productId);
        
      }
    } catch (error) {
      console.error("Error al eliminar el producto", error);
    }
  });
});