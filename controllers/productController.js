const Product = require("../models/product");

exports.createProduct = async (req,res) => {
    try {
        const prod =await Product.create(req.body);
        res.status(201).json(prod);
    } catch (err) {
        res.status(400),json({error:err.message});
    }
};

exports.getProducts = async (req,res) => {
    try {
        const prod = await Product.findAll();
        res.status(200).json(prod);
    } catch (err) {
        res.status(400).json({error:err,message});
    }
};

exports.getProductById =async (req,res) => {
    try {
        const prod = await Product.findByPk(req.params.id);
        if (prod) {
            res.status(200).json(prod);
        } else {
            res.status(404).json({error:'Product not found'});
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};

exports.updateProduct = async (req,res) => {
    try {
        const proc = await Product.findByPk(req,params.is);
        if (prod) {
            res.status(200).json(prod);
        } else {
            res.status(404).json({error:'Product not found'});
        }
    } catch (err) {
        res.status(400),json({error: err.message});
    }
};

exports.deleteProduct = async (req,res) => {
    try {
        const prod = await Product.findByPk(req.params.id);
        if (prod) {
            awaitprod.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({error: ' Product not found'});
        }
    } catch (err) {
        res.status(400).json({error: err.message}); 
    }
};