const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Book = require('../models/Registrar');
const Registrar = require( '../models/Registrar' );
const { default: RegistrarService } = require( '../../RegistrarService' );
const Registrar = require( './backend/models/Registrar' );

router.get('/', async (req, res) => {
    const Registrarse = await Registrar.find().sort('-_id');
    res.json(RegistrarService);
});

router.post('/', async (req, res) => {
    const { Nombre, Apellido, Email, FechadeNacimineto } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newRegistrar = new Registrar({Nombre, Apellido, Email, FechadeNacimineto});
    console.log(newRegistrar)
    await newRegistrar.save();
    res.json({'message': 'Registrar Saved'});
});

router.delete('/:id', async (req, res) => {
    const Registrar = await Registrar.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + Registrar.imagePath));
    res.json({message: 'Registrar Deleted'});
});


module.exports = router;