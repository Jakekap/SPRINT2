import { getProducts, deleteProduct, updateProduct } from "../services/api.js";
const card = document.querySelector(".shoes-container");
const modal = document.getElementById("myModal");

const url = window.location;
const collection = new URLSearchParams(url.search);
const currentCollection = collection.get("collection");

const createShoeBtn = document.getElementById("createShoeBtn");
const editShoeBtn = document.getElementById("editShoeBtn");

async function listProducts(collection) {
  const products = await getProducts();
  products.forEach((product) => {
    if (collection === null || product.coleccion === collection) {
      const template = `
      <div class="shoe-card">
      <a href="productDetail.html?id=${product.id}">
          <li>
              <img class="shoe-image" src="${product.imagen0}" alt="${
        product.nombre
      }" />
              <h2 class="shoe-name">${product.nombre}</h2>
              <p class="shoe-collection">${product.coleccion}</p>
              <p class="shoe-price">${product.precio} COP</p>
              </li>
              </a>
              ${
                url.pathname === "/pages/adminPanel.html"
                  ? `<button class="delete-button" id="${product.id}">Eliminar</button>
                  <button class="edit-button" id="${product.id}">Editar</button>`
                  : ""
              }
      </div>
        `;
      card.innerHTML += template;
    }
  });
  const deleteButtons = document.querySelectorAll(".delete-button");
  const editButtons = document.querySelectorAll(".edit-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      console.log("click");
      const productId = event.target.id;
      try {
        await deleteProduct(productId);
        card.innerHTML = "";
        listProducts(currentCollection);
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    });
  });
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = Number(event.target.id);
      console.log(productId);
      createShoeBtn.style.display = "none";
      editShoeBtn.style.display = "block";
      modal.style.display = "block";
      const editShoeForm = document.getElementById("createShoeForm");
      const currentProduct = products.find(
        (product) => product.id === productId
      );
      editShoeForm.shoeName.value = currentProduct.nombre;
      editShoeForm.price.value = currentProduct.precio;
      editShoeForm.category.value = currentProduct.coleccion;
      editShoeForm.url1.value = currentProduct.imagen0;
      editShoeForm.url2.value = currentProduct.imagen1;
      editShoeForm.url3.value = currentProduct.imagen2;
      editShoeForm.url4.value = currentProduct.imagen3;

      editShoeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const data = {
          nombre: editShoeForm.shoeName.value,
          precio: editShoeForm.price.value,
          coleccion: editShoeForm.category.value,
          imagen0: editShoeForm.url1.value,
          imagen1: editShoeForm.url2.value,
          imagen2: editShoeForm.url3.value,
          imagen3: editShoeForm.url4.value,
        };
        updateProduct(productId, data);
      });

      // try {
      //   await editProduct(productId);
      //   card.innerHTML = "";
      //   listProducts(currentCollection);
      // } catch (error) {
      //   console.error("Error al eliminar el producto:", error);
      // }
    });
  });
}

listProducts(currentCollection);
