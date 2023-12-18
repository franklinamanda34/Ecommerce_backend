const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
router.get('/', (req, res) => {
try {
const tagData = await Tag.findAll({
include: [{ model: Product }],
});
res.status(200).json(tagData);
}
catch (error) {
console.error(error);
res.status(500).json(error);
}
});
router.get('/:id', async (req, res) => {
try{
const tagData = await Tag.findByPk(req.params.id, {
include: [{ model: Product }],
});
if (tagData) {
  res.status(200).json(tagData);
}
else {
  res.status(404).json({ message: 'error' });
}
router.post('/', async (req, res) => {
try {
const tagData = await Tag.create(req.body);
res.status(200).json(tagData);
}
catch (error) {
console.error(error);
res.status(500).json(error);
}
});
router.put('/:id', async (req, res) => {
try {
const tagData = await Tag.update(req.body, {
where: {
id: req.params.id,
},
returning: true,
});
res.status(200).json(tagData);
}
catch (error) {
console.error(error);
res.status(500).json(error);
}
});
router.delete('/:id', async (req, res) => {
try{
const tagData = await Tag.destroy({
where: {
id: req.params.id,
},
});
res.status(200).json(tagData);
}
});

module.exports = router;
