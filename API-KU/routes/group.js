const express = require("express");
const router = express.Router();

const groupData = [
  {
    id: 172,
    npm: "5210411172",
    name: "FILLAH ABY PRAMUDYA",
    angatan: "2021",
  },
  {
    id: 2,
    npm: "5210411167",
    name: "AGNESTA LINDA SARI",
    angatan: "2021",
  },
  {
    id: 3,
    npm: "5210411174",
    name: "VERATINA FRIDAYANTI",
    angatan: "2021",
  },
];

router.get("/group", (req, res) => {
  res.send(groupData);
});

module.exports = router;
