import User from "../models/User.js";
import { comparePassword, hashPassword, signToken } from "../services/auth.service.js";

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email e palavra-passe são obrigatórios.",
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const validPassword = await comparePassword(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const token = signToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return res.json({
      message: "Login realizado com sucesso.",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
}

export async function registerController(req, res) {
  try {
    const { name, email, password, role = "admin" } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Nome, email e password são obrigatórios.",
      });
    }

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "Este utilizador já existe." });
    }

    const passwordHash = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password_hash: passwordHash,
      role,
    });

    return res.status(201).json({
      message: "Utilizador criado com sucesso.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Erro no registo:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
}
