const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;
const perfumeData = data.perfume;

router.post("/:perfumeId", async (req, res) => {
    if (Object.keys(req.query).length != 1 || !req.query.userId) {
        res.status(400).json({ error: "You must provide one and only one userId in your url" });
        return;
      }
      const perfumeId = req.params.perfumeId;
      const userId = req.query.userId;
      try {
        await perfumeData.get(perfumeId);
      } catch (e) {
        res.status(404).json({ error: "perfume not found" });
        return;
      }
      try {
        await userData.readuser(userId);
      } catch (e) {
        res.status(404).json({ error: "user not found" });
        return;
      }
      try {
        await perfumeData.likinguser(perfumeId, userId);
        res.status(200).json();
      } catch (e) {
        res.status(500).json({ error: e });
      }
    });
    
router.delete("/:perfumeId", async (req, res) => {
    if (Object.keys(req.query).length != 1 || !req.query.userId) {
    res.status(400).json({ error: "You must one and only one userId in your url" });
    return;
    }
    const perfumeId = req.params.perfumeId;
    const userId = req.query.userId;
    try {
    await perfumeData.get(perfumeId);
    } catch (e) {
    res.status(404).json({ error: "perfume not found" });
    return;
    }
    try {
    await userData.readuser(userId);
    } catch (e) {
    res.status(404).json({ error: "user not found" });
    return;
    }
    try {
    await perfumeData.unlikinguser(perfumeId, userId);
    res.status(200).json();
    } catch (e) {
    res.status(500).json({ error: e });
    }
});

  module.exports = router;