const userModel = require("../models/userModel");
const router = require("express").Router();

router.post("/subscription", async (req, res) => {
    const user = await userModel.findOne({email : req.body.email});
    if(user) {
        const date = new Date();
        user.subscription = {
            dateBegin : Date.now(),
            dateEnd : new Date(date.setMonth(date.getMonth()+req.body.period)),
            period : req.body.period,
        }
        await user.save();
        res.status(200).send("SUBSCRUCTION SUCCES");
        return;
    }
    res.status(406).send("NO USER");
})

module.exports = router