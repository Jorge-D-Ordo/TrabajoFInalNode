import { verifyToken } from "../utils/webtoken.js";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        error: "Token requerido"
      });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        error: "Token no proporcionado"
      });
    }
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(403).json({
        error: "Token inválido"
      });
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({
      error: "Error en autenticación"
    });
  }
};