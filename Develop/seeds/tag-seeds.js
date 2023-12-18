const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Outdoor',
  },
  {
    tag_name: 'Pedal',
  },
  {
    tag_name: 'Shred',
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
