import { generateToken } from "../utils/webtoken.js";


export const login = (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        error: "Email y password son obligatorios"
      });
    }
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPass = process.env.ADMIN_PASS;
    const userEmail = process.env.USER_EMAIL;
    const userPass = process.env.USER_PASS;

    let role = null;
    if (email === adminEmail && password === adminPass) {
      role = "admin";
    }
    if (email === userEmail && password === userPass) {
      role = "user";
    }
    if (!role) {
      return res.status(401).json({
        error: "Credenciales inválidas"
      });
    }
    const token = generateToken({
      email,
      role
    });
    return res.status(200).json({
      message: "Login exitoso",
      token
    });
  } catch (error) {
    console.log("ERROR LOGIN:", error);
    return res.status(500).json({
      error: error.message
    });
  }
};