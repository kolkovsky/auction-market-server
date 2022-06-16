const express = require("express");

const router = express.Router();

router.post("/create", (req, res, next) => {
    console.log(req.body);
    res.status(200).send({
        message: "OK",
    });
});

router.get("/:id", (req, res, next) => {

});

router.patch("/:id", (req, res, next) => {

});

module.exports = router;