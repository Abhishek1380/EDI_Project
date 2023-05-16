const express = require("express"); // To use express module
const app = express();
const path = require("path");
const port = 3096;
const hbs = require("hbs");

require("./db/conn.js");

// const port = process.env.PORT || 3080;


// 

// const static_path = path.join(__dirname, "../public");

// app.use(express.static(static_path));

// app.set("view engine", "hbs");
// app.set('views', './views')
// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.set("views", path.join(__dirname, "views"));
// app.set('views', __dirname + '/views');

// const static_path = path.join(__dirname, "../public");

// app.use(express.static("static_path"));
// app.set("view engine", "hbs");
// console.log(path.join(__dirname + '../views'));

// app.get("/", (req, res) => {
//     res.render("index");
// });





const publicPath = path.join(__dirname, '../public')   //for accessing comeplete file
const template_Path = path.join(__dirname, '../template/views');
const partials_Path = path.join(__dirname, '../template/partials');

//express being initialised


app.use(express.static(publicPath))
app.set('view engine', 'hbs')    //use to set handle bars. we need to provide key value pair
app.set("views", template_Path);



app.get('', (req, res) => {
    res.render('index');             //need to provide the hbs file name which you will find in view
})





app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});