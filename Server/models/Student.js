import mongoose from "mongoose";

const studentScheme = new mongoose.Schema({
    role: {type: String},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    grade: {type: Number}
})

const studentModel = mongoose.model('Student', studentScheme)
export {studentModel as Student}