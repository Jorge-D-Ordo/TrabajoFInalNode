import express from "express";
import {
  getAll,
  getById,
  create,
  remove
} from "../controllers/products.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAll);
router.get("/:id", authMiddleware, getById);

router.post( "/create", authMiddleware, authorizeRole("admin"), create);
router.delete("/:id", authMiddleware, authorizeRole("admin"), remove);


export default router;
