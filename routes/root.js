const express = require("express");
const router = express.Router();
const data = require("../data");
const perfumeData = data.Perfume;
const userData = data.users;

router.get("/", async (req, res) => {
    try {
      const perfumeList = await perfumeData.getAll();
      
      res.render('/page/homepage');
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });  

module.exports = router;