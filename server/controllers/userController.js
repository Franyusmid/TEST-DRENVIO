// server/controllers/userController.js
import User from "../models/User.js";
import bcryptjs from "bcryptjs";
const create = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = await User.create({
      name,
      lastName,
      email,
      password: hashedPassword,
    });
    return res.json({
      msg: "Usuario Creado",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error creando el usuario o ya fue creado",
    });
  }
};

export default {
  create,
};
