const URL = "http://localhost:3000";

export async function getProducts() {
  try {
    const response = await axios(`${URL}/productos`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos", error);
  }
}

export async function getProductShopping() {
  try {
    const response = await axios(`${URL}/shopping`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos", error);
  }
}

export async function postProduct(data) {
  try {
    const response = await axios.post(`${URL}/productos`, data);
    return response.data;
  } catch (error) {
    console.error("Error al crear el producto", error);
  }
}

export async function updateProduct(productId, data) {
  try {
    const response = await axios.put(`${URL}/productos/${productId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
  }
}

export async function deleteProduct(productId) {
  try {
    const response = await axios.delete(`${URL}/productos/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
  }
}
