const express = require("express");
const router = express.Router();
const xss = require("xss");

router.get("/login", (req, res) => {
    res.render("./page/loginPage", { title: "User", accountHidden: "hidden" });
});

router.post("/", (req, res) => {
    res.status(500).render("./page/errorPage", { title: "user", errorMessage: "post user" });
});

router.get("/:id", (req, res) => {
    res.status(500).render("./page/errorPage", { title: "user", errorMessage: "get user id" });
});

module.exports = router;