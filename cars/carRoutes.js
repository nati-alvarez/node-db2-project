const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res, next)=>{
    db("car-dealer").then(cars=>{
        res.status(200).json(cars);
    }).catch(err=>{
        next(err);
    })
})

router.post("/", (req, res, next)=>{
    const {vin, make, model, mileage, transmission_type, title_status} = req.body;
    if(!vin || !make || !model || !mileage) return res.status(400).json({message: "Required fields not given"});
    db("car-dealer")
    .insert({vin, make, model, mileage, transmission_type, title_status})
    .then(car=>{
        res.status(201).json(req.body);
    }).catch(err=>{
        next(err);
    })
})

router.get('/:vin', (req, res, next)=>{
    db("car-dealer")
    .where({vin: req.params.vin})
    .then(car=>{
        res.status(200).json(car);
    }).catch(err=>{
        next(err);
    })
})

module.exports = router;