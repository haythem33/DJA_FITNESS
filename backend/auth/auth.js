const userModel = require("./../models/userModel");
const adminModel = require("./../models/AdminModel");
const router = require("express").Router();
const token = require("jsonwebtoken");

router.post("/login",async (req, res) => {
    const user = await userModel.findOne({email : req.body.email,password : req.body.password})
    if(user) {
        res.status(200).send({message : "user ok",token : token.sign({user},'secret')}).end();
        return;
    }
    res.status(406).send("bad information").end();
})
router.post('/loginAdmin',async (req, res) => {
    const admin = await adminModel.findOne({username : req.body.username,password : req.body.password});
    if(admin) {
        res.status(200).send({token : token.sign({admin},'secret')}).end();
        return;
    }
    res.status(406).end();
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