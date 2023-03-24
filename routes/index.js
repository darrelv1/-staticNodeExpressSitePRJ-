const express = require ('express');
const router = express.Router();
const data = require("../data.json")



router.get("/",(req, res) =>{
 const projects = data.projects;
 const Personal = data.Personal;
 res.render('index' , {projects, Personal})
})


module.exports = router