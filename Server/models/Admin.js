import mongoose from "mongoose";

const adminScheme = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const adminModel = mongoose.model('Admin', adminScheme)
export {adminModel as Admin}