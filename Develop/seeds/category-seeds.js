const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Camp',
  },
  {
    category_name: 'Bikes',
  },
  {
    category_name: 'Boards',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
