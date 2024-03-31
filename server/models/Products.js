// 1.importacion

import mongoose from "mongoose";

// 2.SCHEMA(esquema)
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
//3.Modelo

const Product = mongoose.model("Product", productSchema);

//4.EXPORTACION

export default Product;
