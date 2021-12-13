const express = require('express');

const show = require('../models/show.model');

const router = express.Router();

router.post('/', authenticate , async (req,res) => {
    try{

        //const user = req.user;
        const movie = await Movie.create({
            name:req.body.name,
            actors:req.body.actors,
            languages:req.body.languages,
            directors:req.body.directors,
            poster_url:req.body.poster_url,
            

        });
        return res.status(201).json({movie})

    }catch (e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    };
});

router.get('/', async (req,res) => {
    const movie = await Movie.find().lean().exec();
    return res.send(movie)
});

module.exports = router;