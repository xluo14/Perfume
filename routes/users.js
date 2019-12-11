const express = require("express");
const router = express.Router();
const xss = require("xss");

router.get("/user/:id", (req, res) => {
    res.status(500).render("./page/errorPage", { errorMesssage: "error" });
});

module.exports = router;