const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Book = require('../models/Registrar');
const Registrar = require( '../models/Registrar' );
const { default: RegistrarService } = require( '../../RegistrarService' );

router.get('/', async (req, res) => {
    const books = await Registrar.find().sort('-_id');
    res.json(RegistrarService);
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newRegistrar = new Registrar({Nombre, Apellido, Email, FechadeNacimineto});
    console.log(newRegistrar)
    await newRegistrar.save();
    res.json({'message': 'Book Saved'});
});

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + book.imagePath));
    res.json({message: 'Book Deleted'});
});


module.exports = router;