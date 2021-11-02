const userModel = require("./../models/userModel");
const router = require("express").Router();
const token = require("jsonwebtoken");

router.post("/login",async (req, res) => {
    const user = await userModel.findOne({email : req.body.email,password : req.body.password})
    if(user) {
        res.status(200).send({message : "user ok",token : token.sign({data : user.email},'secret')});
        return;
    }
    res.status(406).send("bad information");
})

router.post("/register", async (req, res) => {
    const userExist = await userModel.findOne({email : req.body.email});
    if(userExist) {
        res.status(406).send("user exists");
        return;
    }
    const user = new userModel({
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    })
    await user.save();
    res.status(200).send("user add succes")
})

module.exports = router