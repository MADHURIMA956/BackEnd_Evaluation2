const express = require('express');

const Screen = require('../models/screens.model');

const router = express.Router();

router.post('/',async (req,res) => {
    try{

        const screen = await Screen.create({
            name:req.body.name,
            theater:req.body.theater,
        });
        return res.status(201).json({screen})

    }catch (e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    };
});

router.get('/', async (req,res) => {
    const screen = await Screen.find().lean().exec();
    return res.send(screen)
});

module.exports = router;