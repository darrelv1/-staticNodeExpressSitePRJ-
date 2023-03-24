/*** Step 6 Instructions ***/

/*
Variables and dependencies
 */

const express = require("express");
const app = express();
const index  = require("./routes/index.js")
const about  = require("./routes/about.js")
const project = require("./routes/project.js")

//Setting up view engine PUG
app.set('view engine','pug');

//

//Set static
app.use('/static',express.static('public'))





//Render the home page
app.use("/", index)

//Render the about page
app.use("/about", about);

//Renders Dynamic pages for projects
app.use(`/project`, project)


//404 Error Handler
app.use((req,res, next)=>{
    const err = new Error("404 Error")
    err.status = 404
    err.message = "THIS IS A 404 ERROR -  page/url not found!"

    next(err)
})


//Global Error Handler
app.use((err, req, res, next)=>{

    if(!err.message && !err.status){
     err.message = "Generic Error"
     err.status = 505
    }
    console.dir("Activated the Global Error Handler")
    console.dir(err.status)
    console.dir(err.message)

    res.send(`<h1>${err.message}</h1>`)
    next()

})


app.listen(3000 )


