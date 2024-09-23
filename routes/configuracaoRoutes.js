const express = require("express");
const configuracaoController = require("../controllers/configuracaoController");
const router = express.Router();

router.get("/configuracao", configuracaoController.getConfiguracao);
router.put("/configuracao", configuracaoController.setConfiguracao);

module.exports = router;
