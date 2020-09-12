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

module.exports = router;