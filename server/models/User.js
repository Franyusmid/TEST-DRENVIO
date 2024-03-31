// 1.Importacion

import mongoose from "mongoose";

// 2.schema o esquema

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//3.Modelos

const User = mongoose.model("User", userSchema);

//4.EXportacion

export default User;
