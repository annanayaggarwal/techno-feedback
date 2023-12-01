const mongoose = require("../db/mongoose");

const Schema= new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 1 characters"],
    },
    email:{
        type: String,
        required: [true, "Please Enter Your College Email"],
        unique: true,
        match : [/^([a-zA-Z]){2,15}[2][0123](([xX]{3})|[0-9]{2,3})([0-9]){3}(-d)?@akgec.ac.in$/,"Please fill a valid email address"]
    },
    student: {
        type: String,
        unique:true,
        match:[/^[2][01234](([xX]{3})|[0-9]{2,3})([0-9]){3}(-d)?$/],
        required: [true, "Please Enter Your Student Number"],
        maxLength: [9, "give your correct stdNo."],
        minLength:[7,"give your correct stdNo."]
    },
    TC_ID:{
        type:String,
        required:[true,"Please enter valid TC_ID"],
        // maxLength: [4, "Please enter valid TC_ID."],
        // minLength:[6,"Please enter valid TC_ID."]

    },
    feedback:{
        type:String,
        minLength:[20,"please give your feedback in at least 20 characters"],
        required:[true,"please enter your residence"],
    },
})

const user = mongoose.model("Feedback",Schema);

module.exports = user;