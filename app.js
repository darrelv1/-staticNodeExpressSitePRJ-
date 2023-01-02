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


/*
Routes
 */



//Render the home page
app.use("/", index)

//Render the about page
app.use("/about", about);

//Renders Dynamic pages for projects
app.use(`/project`, project)

app.listen(3000 )


