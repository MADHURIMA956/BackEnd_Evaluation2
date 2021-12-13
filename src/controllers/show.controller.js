const express = require('express');

const Show = require('../models/show.model');

const router = express.Router();

router.post('/', async (req,res) => {
    try{

        //const user = req.user;
        const show = await Show.create({
            timing:req.body.timing,
            movie:req.body.movie,
            total_seats:req.body.total_seats,
            screen:req.body.screen,    

        });
        return res.status(201).json({show})

    }catch (e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    };
});

router.get('/', async (req,res) => {
    const show = await Show.find().lean().exec();
    return res.send(show)
});

router.get('/movie', async (req,res) => {

    try{
        const movie = await Movie.find({"actors" : {$eq : movie }}).lean().exec();
        return res.send(movie)
    }catch(e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    }
   
});

module.exports = router;