const express = require('express');

const Seat = require('../models/seats.model');

const router = express.Router();

router.post('/',async (req,res) => {
    try{

        const seat = await Seat.create({
            show:req.body.show,
        });
        return res.status(201).json({seat})

    }catch (e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    };
});

router.get('/', async (req,res) => {
    const seat = await Seat.find().lean().exec();
    return res.send(seat)
});


router.get('/seat', async (req,res) => {

    try{
        const movie = await Seat.find({"total_seats" : {$gt : 0 }}).lean().exec();
        return res.send(movie)
    }catch(e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    }
   
});

module.exports = router;