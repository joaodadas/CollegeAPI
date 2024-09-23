const metaService = require("../services/metaService");

class MetaController {
  async createMeta(req, res) {
    try {
      const newMeta = await metaService.createMeta(req.body);
      res.status(201).json(newMeta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getMeta(req, res) {
    try {
      const meta = await metaService.getMetaById(req.params.id);
      if (!meta) {
        return res.status(404).json({ error: "Meta not found" });
      }
      res.json(meta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getMetas(req, res) {
    try {
      const metas = await metaService.getAllMetasByUserId(req.params.userId);
      res.json(metas);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateMeta(req, res) {
    try {
      const updatedMeta = await metaService.updateMeta(req.params.id, req.body);
      if (!updatedMeta) {
        return res.status(404).json({ error: "Meta not found" });
      }
      res.json(updatedMeta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteMeta(req, res) {
    try {
      await metaService.deleteMeta(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new MetaController();
