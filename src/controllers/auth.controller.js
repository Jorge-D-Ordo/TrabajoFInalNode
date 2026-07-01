import { generateToken } from "../utils/webtoken.js";

export const login = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@test.com" && password === "1234") {
    const token = generateToken({ email });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Credenciales inválidas" });
};