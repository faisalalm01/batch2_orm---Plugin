const mainRoutes = require('express').Router();
const menuRoutes = require('./menuRoutes');

mainRoutes.use('/menu', menuRoutes);

module.exports = mainRoutes;