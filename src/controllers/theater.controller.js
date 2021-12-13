const express = require('express');

const Theater = require('../models/theatres.model');

const router = express.Router();

router.post('/',async (req,res) => {
    try{

        const theater = await Theater.create({
            name:req.body.name,
            location:req.body.location,
        });
        return res.status(201).json({theater})

    }catch (e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    };
});

router.get('/', async (req,res) => {
    const theater = await Theater.find().lean().exec();
    return res.send(theater)
});

module.exports = router;