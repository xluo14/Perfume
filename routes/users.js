const express = require('express');
const router = express.Router();
const data = require('../data');
const perfumeData = data.perfume;
const userData = data.users;
const bcrypt = require("bcryptjs");
const saltRounds = 8;

//get information from log in page
/* router.post('/',async(req,res)=>{
    let username = req.body.personame;
    let userpassward = req.body.passward;
    try{
        const personinfor=await userData.getOneuser(username,userpassward); 
        const personreview=await perfumeData.getUserreview(personinfor['_id']);

        res.render("user/my_homepage",{
            title:personinfor['userName'], // header 形式， 做成链接
            perfumereview: personreview, //每一条香评做成链接
            personid: personinfor['_id'] //隐藏部分，用于查询用户详细信息
        });
    
    }catch(e){
        res.status(400).json(e);
    } 
}); */
router.post('/',async(req,res)=>{

});

router.post('/login', async (req, res) => {
    let username = req.body.username;
    let userpassward=await bcrypt.hash(req.body.password, saltRounds);
    try{
        const personinfor=await userData.ifAuthenticated(username,userpassward); 

        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 1);
        req.session.cookie.expires=expiresAt;
        req.session.AuthCookie=personinfor;

        res.redirect('users/user_homepage');

        // const personreview=await perfumeData.getUserreview(personinfor['_id']);
        // res.render("user/my_homepage",{
        //     title:personinfor['userName'], // header 形式， 做成链接
        //     perfumereview: personreview, //每一条香评做成链接 
        //     personid: personinfor['_id'] //隐藏部分，用于查询用户详细信息
        // });
    }catch(e){
        res.status(401).render('page/errorPage',{errorMessage:'you did not provide a valid username and/or password'});
    }

  }); 

//create new user
router.post('/new',async(req,res)=>{
    let userName=req.body.userName;
    let Email=req.body.Email;
    let Gender=req.body.Gender;
    let Age=req.body.Age;
    let hashedPassword=await bcrypt.hash(req.body.hashedPassword, saltRounds);
    try{
        const newuser=await userData.create(userName, Email,Gender,Age,hashedPassword);

        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 1);
        req.session.cookie.expires=expiresAt;
        req.session.AuthCookie=peopleData[i];

        res.redirect('users/user_homepage');
        // res.render("user/my homepage",{
        //     title:personinfor['userName'], // header 形式， 做成链接
        //     perfumereview:[],
        //     personid: personinfor['_id'] //隐藏部分，用于查询用户详细信息
        // });
    }catch(e){
        res.status(401).render('posts/login',{error:'you did not provide a valid username and/or password'})
    }
});

router.post('/user_homepage',async(req,res)=>{
    var personreview=await perfumeData.getUserreview(req.session.AuthCookie['_id']);
    res.render('page/userPage',{
        userName:req.session.AuthCookie['userName'],
        emailAddress:req.session.AuthCookie['Email'],
        Gender:req.session.AuthCookie['Gender'],
        Age:req.session.AuthCookie['Age'],
        userReviews:personreview
    });
});