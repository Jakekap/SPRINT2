const addButton = document.getElementById("add-shoes");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const createShoeBtn = document.getElementById("createShoeBtn");
const deleteShoeBtn = document.querySelector(".delete-button");

deleteShoeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target.id);
});

createShoeBtn.addEventListener("click", (e) => {
  // Formulario
  e.preventDefault();
  const createShoeForm = document.getElementById("createShoeForm");
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
  axios
    .post("http://localhost:3000/productos", data)
    .then((response) => {
      // Maneja la respuesta del servidor si es necesario
      console.log(response.data);
    })
    .catch((error) => {
      // Maneja los errores de la solicitud si es necesario
      console.error("Error al crear el producto", error);
    });
});
// Abrir el modal al hacer clic en el botón
addButton.addEventListener("click", () => {
  modal.style.display = "block";
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
