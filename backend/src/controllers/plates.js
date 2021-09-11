const Plate = require('../models/plate');
const Category = require('../models/category');

class Plates {

  constructor() {
    this.plates = []
  }

  async getPlates() {
    console.log('herereer')
    const plates = await Plate.find();
    const categories = await Category.find();

    const indexedCategories = categories.reduce((acc, val) => {
      return({
        ...acc,
        [val._id]: val
      })
    }, {})

    const res = plates.map((plate) => {
      return ({
        ...plate.toObject(),
        categories: plate.categories.map((categoryId) => {
          return indexedCategories[categoryId]
        })
      })
    })
    return res;
  }

  async addPlate(plate) {
    const newPlate = new Plate(plate);
    await newPlate.save();
    return true;
  }

  async updatePlate(id, data) {
    await Plate.findByIdAndUpdate(id, data);
    return true
  }

  async deletePlate(id) {
    await Plate.findByIdAndDelete(id);
    return true
  }


}

module.exports = Plates
