import { postProduct } from "../services/api.js";

const addButton = document.getElementById("add-shoes");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const createShoeBtn = document.getElementById("createShoeBtn");
const editShoeBtn = document.getElementById("editShoeBtn");
const createShoeForm = document.getElementById("createShoeForm");

// Abrir el modal al hacer clic en el botónn
addButton.addEventListener("click", () => {
  modal.style.display = "block";
  editShoeBtn.style.display = "none";
  createShoeForm.shoeName.value = "";
  createShoeForm.price.value = "";
  createShoeForm.category.value = "";
  createShoeForm.url1.value = "";
  createShoeForm.url2.value = "";
  createShoeForm.url3.value = "";
  createShoeForm.url4.value = "";
});

// Cerrar el modal al hacer clic en la "X"
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera de él
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

createShoeBtn.addEventListener("click", (e) => {
  // Formulario para crear el producto
  e.preventDefault();
  const nombre = createShoeForm.shoeName.value;
  const precio = createShoeForm.price.value.toString();
  const coleccion = createShoeForm.category.value;
  const imagen0 = createShoeForm.url1.value;
  const imagen1 = createShoeForm.url2.value;
  const imagen2 = createShoeForm.url3.value;
  const imagen3 = createShoeForm.url4.value;
  const data = {
    nombre,
    precio,
    coleccion,
    imagen0,
    imagen1,
    imagen2,
    imagen3,
  };
  postProduct(data);
});
