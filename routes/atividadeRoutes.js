const express = require("express");
const atividadeController = require("../controllers/atividadeController");
const router = express.Router();

router.post("/atividades", atividadeController.criarAtividade);
router.get("/atividades/:id", atividadeController.getAtividadeById);
router.get("/atividades", atividadeController.getAllAtividades);
router.put("/atividades/:id", atividadeController.atualizarAtividade);
router.delete("/atividades/:id", atividadeController.deletarAtividade);

module.exports = router;
