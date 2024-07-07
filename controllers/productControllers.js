const Product = require('../models/product');

exports.createProduct = async (req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch (eRR) {
        res.status(400).json({ eRR: eRR.message });
    }
};

exports.getProducts = async (req , res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    }
    catch (eRR) {
        res.status(400).json({ eRR: eRR.message });
    }
};

exports.getProductById = async (req,res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ error: 'Product not found'});
        }
    } catch (ERR) {
        res.status(400).json({ ERR: ERR.message});
    }
};

exports.updateProduct = async (req , res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.update(req.body);
            res.status(200).json({product});
        }
        else {
            res.status(404).json({ error: 'product not found'});
        }
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.deleteProduct = async (req,res) => {
    try {
        const prod = await Product.findByPk(req.params.id);
        if (prod) {
            await prod.destroy();
            res.status(200).send();
        }
        else {
            res.status(404).json({ error: 'Product not found'});
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message});
    }
};

