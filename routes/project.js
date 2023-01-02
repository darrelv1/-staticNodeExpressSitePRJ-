const express = require ('express');
const router = express.Router();

router.get("/:id",(req,res) => {
    const id  = req.params.id
    const query = req.query.age
    console.log('in the projects middleware')
    console.log(id)
    console.log(query)
    res.render('project')
});

router.get("/",(req,res) => {
    const id  = req.params.id


    console.log('in PROJECTS')
    console.log(id)

    res.render('project')
});

module.exports = router