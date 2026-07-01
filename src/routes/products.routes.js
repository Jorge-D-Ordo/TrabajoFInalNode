import express from "express";
import {
  getAll,
  getById,
  create,
  remove
} from "../controllers/products.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAll);
router.get("/:id", authMiddleware, getById);
router.post("/create", authMiddleware, create);
router.delete("/:id", authMiddleware, remove);

export default router;
