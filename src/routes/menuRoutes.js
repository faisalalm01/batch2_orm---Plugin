const menuRoutes = require('express').Router();
const menuControllers = require('../controllers/menuControllers');
const authMiddeware = require('../middleware/authMiddleware')

menuRoutes.post('/', authMiddeware.checkLogin, menuControllers.postDataMenu);
menuRoutes.get('/', menuControllers.getAllData);
menuRoutes.delete('/:id', menuControllers.deleteData);
menuRoutes.get('/:id', menuControllers.getDataById);
menuRoutes.put('/:id', menuControllers.updateData);

module.exports = menuRoutes;