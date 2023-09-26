const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    try{
        res.json('hello from appetizers');     
    }
    catch(err){
        next(err);
    }
});

router.get("/:id", (req, res, next) => {
    try{
        res.json('hello from appetizers id');     
    }
    catch(err){
        next(err);
    }
});

module.exports = router;