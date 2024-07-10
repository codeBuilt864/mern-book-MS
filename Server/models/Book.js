import mongoose from "mongoose";

const bookScheme = new mongoose.Schema({
    name: {type: String},
    author: {type: String, required: true},
    imageUrl: {type: String, required: true},
    pdfURL: {type: String, required: true},
})

const bookModel = mongoose.model('Book', bookScheme)
export {bookModel as Book}