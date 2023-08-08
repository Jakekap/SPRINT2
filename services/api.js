const URL = "http://localhost:3000";

export async function getProducts() {
  const response = await fetch(`${URL}/productos`);
  const data = await response.json();
  return data;
}

export async function getProductShopping() {
  const response = await fetch(`${URL}/shopping`);
  const data = await response.json();
  return data;
}

export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${URL}/productos/${productId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Producto eliminado exitosamente");
      return true;
    } else {
      console.error("Error al eliminar el producto");
      return false;
    }
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    return false;
  }
}