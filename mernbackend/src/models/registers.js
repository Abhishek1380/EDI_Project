const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
    },
    gender: {
        type: String
    },
    phone: {
        type: Number
    },
    age: {
        type: Number
    },
    password: {
        type: Number
    },
    confirmpassword: {
        type: Number
    }

})

// New collection will be created
const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;