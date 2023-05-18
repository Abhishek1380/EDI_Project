const express = require("express"); // To use express module
const app = express();
const path = require("path");
// const port = 3096;
const hbs = require("hbs");

const Register = require("./models/registers");

require("./db/conn.js");

const port = process.env.PORT || 3080;




app.use(express.json());
app.use(express.urlencoded({ extended: false }));



const publicPath = path.join(__dirname, '../public')   //for accessing comeplete file
const template_Path = path.join(__dirname, '../template/views');
// const partials_Path = path.join(__dirname, '../template/partials');

//express being initialised


app.use(express.static(publicPath))
app.set('view engine', 'hbs')    //use to set handle bars. we need to provide key value pair
app.set("views", template_Path);



app.get('', (req, res) => {
    res.render("index");             //need to provide the hbs file name which you will find in view
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassward) {

            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                age: req.body.age,
                gender: req.body.gender,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword

            })
            const registered = await registerEmployee.save();
            res.status(201).render(index);


        } else {
            res.send("Passwords are not matching");
        }
    } catch (error) {
        res.status(400).send(error);
    }
})



app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});