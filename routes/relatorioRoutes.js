const express = require("express");
const relatorioController = require("../controllers/relatorioController");
const router = express.Router();

router.post("/relatorios", relatorioController.createRelatorio);
router.get("/relatorios", relatorioController.getAllRelatorios);
router.get("/relatorios/:id", relatorioController.getRelatorioById);
router.put("/relatorios/:id", relatorioController.updateRelatorio);
router.delete("/relatorios/:id", relatorioController.deleteRelatorio);

module.exports = router;
