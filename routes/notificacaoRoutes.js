const express = require("express");
const notificacaoController = require("../controllers/notificacaoController");
const router = express.Router();

router.post("/notificacoes", notificacaoController.createNotificacao);
router.get("/notificacoes/:id", notificacaoController.getNotificacao);
router.get("/notificacoes/user/:userId", notificacaoController.getNotificacoes);
router.put("/notificacoes/:id", notificacaoController.updateNotificacao);
router.delete("/notificacoes/:id", notificacaoController.deleteNotificacao);

module.exports = router;
