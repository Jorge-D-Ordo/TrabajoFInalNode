import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from "../services/products.service.js";

export const getAll = async (req, res) => {
  try {
    const data = await getAllProducts();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener productos"
    });
  }
};

export const getById = async (req, res) => {
  try {
    const data = await getProductById(req.params.id);
    if (!data) {
      return res.status(404).json({
        error: "Producto no encontrado"
      });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener producto"
    });
  }
};

export const create = async (req, res) => {
  try {
    const result = await createProduct(req.body);
    res.status(201).json({
      message: "Producto creado",
      id: result.id
    });
  } catch (error) {
    res.status(400).json({
      error: "Datos inválidos"
    });
  }
};

export const remove = async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.status(200).json({
      message: "Producto eliminado"
    });
  } catch (error) {
    console.error("ERROR DELETE:", error);

    res.status(error.status || 500).json({
      error: error.message
    //  error: "Error al eliminar producto"
    });
  }
};