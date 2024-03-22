// server/controllers/userController.js

let data = [
  {
    id: 1,
    name: "Franyusmid",
  },
  {
    id: 2,
    name: "Daniela",
  },
];

const readAll = (req, res) => {
  res.json({
    message: "Datos obtenidos con éxito.",
    data: data,
  });
};

export default {
  readAll,
};
