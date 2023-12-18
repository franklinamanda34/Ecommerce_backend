const { Product } = require('../models');

const productData = [
{
product_name: 'Tent',
price: 500.0,
stock: 25,
category_id: 1,
},
{
product_name: 'BMX',
price: 300.00,
stock: 12,
category_id: 2,
},
{
product_name: 'Snowboard',
price: 200,
stock: 50,
category_id: 3,
}
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
