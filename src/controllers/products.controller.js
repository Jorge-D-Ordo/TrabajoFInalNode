import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from "../services/products.service.js";

export const getAll = async (req, res) => {
  res.json(await getAllProducts());
};

export const getById = async (req, res) => {
  const data = await getProductById(req.params.id);
  if (!data) return res.status(404).json({ message: "No encontrado" });
  res.json(data);
};

export const create = async (req, res) => {
  const result = await createProduct(req.body);
  res.json({ id: result.id });
};

export const remove = async (req, res) => {
  await deleteProduct(req.params.id);
  res.json({ message: "Eliminado" });
};