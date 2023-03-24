const express = require ('express');
const router = express.Router();
const data = require("../data.json")
const projects = data.projects

router.get("/:id",(req,res,next) => {
    if(projects[req.params.id]) {
        const id  = req.params.id
        const project = projects[id]
        res.render('project', {project} )
    } else{

        err = new Error();
        err.status = 404
        err.message = "404 Page not found! This project does not exist"
        next(err)
    }
});

module.exports = router