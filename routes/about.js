const express = require ('express');
const router = express.Router();
const Personal = require("../data.json").Personal


router.use((req,res) => {

    res.render('about', {Personal});
})

module.exports = router