const { where } = require('sequelize');
const { menu } = require('../models');

module.exports = {

    // post data
    postDataMenu: (req, res) => {
        const {body} = req

        menu.create(body)
        .then((data) => {
            res.status(200).send({
                msg: 'success post data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed post data',
                status : 500,
                error
            })
        })
    },

    getAllData: (req, res) => {
        menu.findAll()
        .then((data) => {
            res.status(200).send({
                msg: 'success get All data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed get All data',
                status : 500,
                error
            })
        })
    },

    // get data by id
    getDataById: (req, res) => {
        const {id} = req.params;

        menu.findOne({where : {id}})
        .then((data) => {
            res.status(200).send({
                msg: 'success get data by id',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed get data by id',
                status : 500,
                error
            })
        })
    },

    // update
    updateData: (req, res) => {
        const {id} = req.params;
        const {body} = req;
        menu.update(body, {where : {id}})
        .then((data) => {
            res.status(200).send({
                msg: 'success update data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed update data',
                status : 500,
                error
            })
        })
    },

    deleteData: (req, res) => {
        const {id} = req.params;

        menu.destroy({where : {id}})
        .then((data) => {
            res.status(200).send({
                msg: 'success delete data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed delete data',
                status : 500,
                error
            })
        })
    }
}