const express = require ('express');
const router = express.Router();
const data = require("../data.json")



router.get("/",(req, res) =>{
 const projects = data.projects;
 res.render('index' , {projects})
})


module.exports = router