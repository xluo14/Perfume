const express = require("express");
const router = express.Router();
const xss = require("xss");

router.get("/tag/:tagName", (req, res) => {
    res.status(500).render("page/errorPage", { title:"Perfume - Tag", errorMessage: "get tag tagname" });
});

router.get("/toprating", (req, res) => {
    res.status(500).render("page/errorPage", { title:"Perfume - Toprating", errorMessage: "toprating" });
});

router.get("/mostcomment", (req, res) => {
    res.status(500).render("page/errorPage", { title:"Perfume - Mostcomment", errorMessage: "mostcomment" });
});

router.get("/search/:string", (req, res) => {
    res.status(500).render("page/errorPage", { title:"Perfume - Search", errorMessage: "search string" });
});

router.get("/:id", (req, res) => {
    res.render("page/perfumePage", { title:"Perfume"});
});

module.exports = router;