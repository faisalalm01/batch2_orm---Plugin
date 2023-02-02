const menuRoutes = require('express').Router();
const menuControllers = require('../controllers/menuControllers');

menuRoutes.post('/', menuControllers.postDataMenu);
menuRoutes.get('/', menuControllers.getAllData);
menuRoutes.delete('/:id', menuControllers.deleteData);
menuRoutes.get('/:id', menuControllers.getDataById);
menuRoutes.put('/:id', menuControllers.updateData);

module.exports = menuRoutes;