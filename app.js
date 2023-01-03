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

//testing 500
// app.use((req,res, next)=>{
//     const err = new Error()
//     // err.status = "505"
//     // err.message = "505 Error"
//     next(err)
// })
/*
Routes
 */



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
    err.message = "THIS IS 404 ERROR PAGE NOT FOUND!"
    next(err)
})

//Global Error Handler
app.use((err, req, res, next)=>{

    if(!err.message && !err.status){
     err.message = "Generic Error"
     err.status = 505
    }
    console.log("Global Variable")
    console.dir(err.status)
    console.dir(err.message)

    res.send(`<h1>${err.message}</h1>`)
    next()

})


app.listen(3000 )


