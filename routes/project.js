const express = require ('express');
const router = express.Router();
const data = require("../data.json")
const projects = data.projects

router.get("/:id",(req,res) => {
    const id  = req.params.id
    const query = req.query.age


    const exactProject =  projects[id].project_name
    const project = projects[id]
    console.log(exactProject)
    console.log('in the projects middleware')
    console.log(id)
    console.log(query)
    res.render('project', {project} )
});

router.get("/",(req,res) => {
    const id  = req.params.id


    console.log('in PROJECTS')
    console.log(id)

    res.render('project')
});

module.exports = router