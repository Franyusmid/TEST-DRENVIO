let data = [
  {
    id: 1,
    name: "TENIS ADIDAS FORUM LOW YOYOGI PARK",
  },
  {
    id: 2,
    name: "TENIS JORDAN 5 BLUEBIRD",
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
