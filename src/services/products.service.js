import * as model from "../models/products.model.js";

export const getAllProducts = async () => {
  try {
    return await model.getAll();
  } catch (error) {
    throw new Error("Error al obtener productos");
  }
};

export const getProductById = async (id) => {
  try {
    const product = await model.getById(id);

    if (!product) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      throw error;
    }

    return product;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (data) => {
  try {
    if (
      !data.id ||
      !data.CodProducto ||
      !data.nombre ||
      !data.descripcion ||
      !data.presentacion ||
      !data.imagen1 ||
      !data.genero ||
      !data.notas ||
      data.stock=== undefined  ||
      data.eliminado=== undefined  ||
      data.precio=== undefined 
    ) {
      const error = new Error("Datos incompletos");
      error.status = 400;
      throw error;
    }

    return await model.create(data);
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  console.log("PASO POR SERVICE DELETE");
  console.log("ID SERVICE:", id);

  try {
    return await model.remove(id);

    /* if (!product) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      throw error;
    }*/

    // return await model.remove(id);
  } catch (error) {
    throw error;
  }
};
