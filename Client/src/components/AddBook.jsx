import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const AddBook = () => {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [pdfURL, setPdfURL] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/book/add', {name,author, imageUrl, pdfURL})
        .then(res => {
          if(res.data.added) {
            navigate('/books')
          }
          else {
            console.log(res)
          }
        })
        .catch(err => console.log(err))
      }

  return (
    <div className='student-form-container'>
        <form className='student-form' onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <div className="form-group">
                <label htmlFor="book">Book Name:</label>
                <input type="text" name="book" id="book" 
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author Name:</label>
                <input type="text" name="author" id="author" 
                onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <input type="text" name="image" id="image" 
                onChange={(e) => setImageUrl(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="pdf">PDF URL:</label>
                <input type="text" name="pdf" id="pdf" 
                onChange={(e) => setPdfURL(e.target.value)}/>
            </div>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddBook