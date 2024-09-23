const express = require("express");
const configuracaoService = require("../application/configuracaoService");

const router = express.Router();

router.get("/configuracao/tema", (req, res) => {
  const tema = configuracaoService.getTemaInterface();
  res.json({ tema });
});

router.post("/configuracao/tema", (req, res) => {
  const { temaInterface } = req.body;
  configuracaoService.setTemaInterface(temaInterface);
  res.status(200).json({ message: "Tema interface updated successfully!" });
});


module.exports = router;
