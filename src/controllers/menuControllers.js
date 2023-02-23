const { menu, kategori, Sequelize } = require('../models');
const Op = Sequelize.Op

module.exports = {

    // post data
    postDataMenu: (req, res) => {
        const {body} = req

        const newData = {
            ...body,
            Image : req.Image.url,
        }
        menu.create(newData, {
            include: [{
                model:kategori,
                as: "kategoris",
                attributes: ['nama_kategori']
            }]
        })
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
        const {s} = req.query;
        console.log(s);
        if (s === undefined) {
            menu.findAll({
                include: [{
                    model:kategori,
                    as: "kategoris",
                    attributes: ['nama_kategori']
                }]
            })
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
        }else if(s !== undefined){
            menu.findAll({
                where:{
                    [Op.or]: [{nama:{
                        [Op.like]: '%'+s+'%'
                    }}, {deskripsi:{
                        [Op.like]: '%'+s+'%'
                    }}]
                },
                include: [{
                    model:kategori,
                    as: "kategoris",
                    attributes: ['nama_kategori']
                }]
            })
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
        }
        },

    // search
    // searchAllData: (req, res) => {
    //     const {nama} = req.query;
    //     menu.findAll({
    //         where: {nama:{
    //                 [Op.like]: '%'+nama+'%'
    //             }},
    //         include: [{
    //             model:kategori,
    //             as: "kategoris",
    //             attributes: ['nama_kategori']
    //         }]
    //     })
    //     .then((data) => {
    //         res.status(200).send({
    //             msg: 'success get All data',
    //             status : 200,
    //             data
    //         })
    //     })
    //     .catch((error) => {
    //         res.status(500).send({
    //             msg: 'failed get All data',
    //             status : 500,
    //             error
    //         })
    //     })
    // },

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