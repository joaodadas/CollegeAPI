const express = require("express");
const metaController = require("../controllers/metaController");
const router = express.Router();

router.post("/metas", metaController.createMeta);
router.get("/metas/:id", metaController.getMeta);
router.get("/metas/user/:userId", metaController.getMetas);
router.put("/metas/:id", metaController.updateMeta);
router.delete("/metas/:id", metaController.deleteMeta);

module.exports = router;
