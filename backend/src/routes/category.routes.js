const express = require('express');
const router = express.Router();
const Category = require("../models/category");


router.get('/', async (req, res) => {
    const categories = await Category.find();
    console.log(categories)
    res.json(categories)
});    

router.post('/', async (req,res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.status(200).json({ message: 'category created', ok: true});
  } catch (error) {
    res.status(200).json({ message: 'Error, category not created', ok: false});
  }
})

router.put('/:id' , async (req,res) => {
  try{
    await Category.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ status: 'category updated', ok: true })
  } catch (error) {
    res.status(200).json({ status: 'category not updated', ok: false })
  }
})

router.delete('/:id', async (req,res) => {
    const id = req.params.id;
    await Category.findByIdAndDelete(id)
    res.status(200).json({ status: 'category deleted', ok: true})
})

/*router.get('/:id', async (req,res) => {
   const task = await Task.findById(req.params.id)
    res.json(task)
//    res.json({status: 'Task Given'})
    
})*/
module.exports = router;
