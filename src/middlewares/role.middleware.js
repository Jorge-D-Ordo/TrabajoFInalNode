export const authorizeRole = (...rolesPermitidos) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: "Usuario no autenticado",
      });
    }

    if (!rolesPermitidos.includes(req.user.role)) {
      return res.status(403).json({
        error: "No tienes permisos para realizar esta acción",
      });
    }

    next();
  };
};
