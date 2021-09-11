const express = require('express');
const router = express.Router();
const Plates = require('../controllers/plates');

router.post('/', async (req, res) => {
  try{
    const data = req.body;
    const created = new Plates().addPlate(data);
    res.status(200).json({ message: 'plate created', ok: true })
  } catch(error) {
    res.status(200).json({ message: error.message, ok: false })
  }
})

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const plate = await new Plates().updatePlate(id, req.body)
  res.status(200).json({ message: 'plate updated', ok: true })
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const plate = await new Plates().deletePlate(id)
  res.status(200).json({ message: 'plate deleted', ok: true })
});

router.get('/', async (req, res) => {
  try{
    const plates = await new Plates().getPlates();
    res.status(200).json(plates);
  } catch(error){
    res.status(200).json({ message: error.message });
  }

});

module.exports = router;
