import Product from "../models/Products.js";

const readAll = async (req, res) => {
  try {
    const Products = await Product.find();

    return res.json({
      message: "Datos obtenidos con éxito.",
      data: Products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
    });
  }
};

const create = async (req, res) => {
  try {
    const { name, price } = req.body;

    const newProduct = await Product.create({
      name,
      price,
    });

    res.json({
      msg: "Producto Creado.",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Producto repetido",
    });
  }
};

const readOne = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      _id: id,
    });
    if (!product) {
      return res.status(400).json({
        msg: "Producto no encontrado",
      });
    }
    res.json({
      msg: "producto encontrado",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
    });
  }
};

export default {
  readAll,
  create,
  readOne,
};
