import * as model from "../models/products.model.js";

export const getAllProducts = () => model.getAll();
export const getProductById = (id) => model.getById(id);
export const createProduct = (data) => model.create(data);
export const deleteProduct = (id) => model.remove(id);