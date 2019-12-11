const express = require("express");
const router = express.Router();
const xss = require("xss");

router.get("/tag/:tagName", (req, res) => {
    res.status(500).render("page/errorPage", { errorMesssage: "error" });
});

router.get("/toprating", (req, res) => {
    res.status(500).render("page/errorPage", { errorMesssage: "error" });
});

router.get("/mostcomment", (req, res) => {
    res.status(500).render("page/errorPage", { errorMesssage: "error" });
});

module.exports = router;