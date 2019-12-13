<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const data = require('../data');
const perfumeData = data.perfume;
const userData = data.users;

//get information from log in page
router.post('/',async(req,res)=>{
    let username = req.body.personame;
    let userpassward = req.body.passward;
    try{
        const personinfor=await userData.getOneuser(username,userpassward); 
        const personreview=await perfumeData.getUserreview(personinfor['_id']);

        res.render("user/my homepage",{
            title:personinfor['userName'], // header 形式， 做成链接
            perfumereview: personreview, //每一条香评做成链接
            personid: personinfor['_id'] //隐藏部分，用于查询用户详细信息
        });

    }catch(e){
        res.status(400).json(e);
    } 
});

//create new user
router.post('/new',async(req,res)=>{
    let userName=req.body.userName;
    let Email=req.body.Email;
    let Gender=req.body.Gender;
    let Age=req.body.Age;
    let hashedPassword=req.body.hashedPassword;
    let ifAdmin= req.body.ifAdmin;
    try{
        const newuser=await userData.create(userName, Email,Gender,Age,hashedPassword,ifAdmin);
        res.render("user/my homepage",{
            title:personinfor['userName'], // header 形式， 做成链接
            perfumereview:[],
            personid: personinfor['_id'] //隐藏部分，用于查询用户详细信息
        });
    }catch(e){
        res.status.json(e);
    }
});

router.post('/user_infornation',async(req,res)=>{
    let userid=req.body.personid;
    try{
        const userchange=await userData.changeUser()
    }catch(e){

    }
});
=======
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
>>>>>>> dev
