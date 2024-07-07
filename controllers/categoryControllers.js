const Category = require('../models/category');

exports.createCategory = async (req,res) => {
    try {
        const catecory = await Category.create(req.body);
        res.status(201).json(category);
    }
    catch(err) {
        res.status(400).json({ err: err.message });
    }
};

exports.getCategories = async (req,res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if ( category) {
            await category.update(req.body);
            res.status(200).json(category);
        }
        else {
            res.status(404).json({ err: "Category not found" });
        }
    }
    catch (err) {
        res.status(400).json({ err: err.message });
    }
};

exports.deleteCategory = async (req,res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if ( category) {
            await category.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ err: "Category not found" });
        }
    }
    catch (ERR){
        res.status(400).json({ ERR: ERR.message });
    }
};