const router = require('express').Router();
const productModel = require('./../models/productModel');

router.post('/addProduct', async (req, res) => {
    const product = new productModel(req.body);
    await product.save();
    res.status(200).send("product added");
});
router.put('/updateProduct/:id', async (req, res) => {
    await productModel.findOneAndUpdate({ id: req.params.id }, req.body).catch(() => {
        res.status(500);
        return;
    });
    res.status(200).end();
})
router.delete('/deleteProduct/:id', async (req, res) => {
    await productModel.findOneAndDelete({ id: req.params.id }).catch(() => {
        res.status(500);
        return;
    });
    res.status(200).end();
})
router.get('/getAllProduct',async (req, res) => {
   const products =  await productModel.find().catch(() => {
        res.status(500).end();
    })
    res.status(200).send(products);
    return;
})

module.exports = router;