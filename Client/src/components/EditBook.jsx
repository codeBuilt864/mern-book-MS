import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const EditBook = () => {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [pdfURL, setPdfURL] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:3001/book/book/'+id)
        .then(res => {
            setName(res.data.name)
            setAuthor(res.data.author)
            setImageUrl(res.data.imageUrl)
            setPdfURL(res.data.pdfURL)
            
        })
        .catch(err => console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/book/book/'+id, {name,author, imageUrl, pdfURL})
        .then(res => {
          if(res.data.updated) {
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
            <h2>Edit Book</h2>
            <div className="form-group">
                <label htmlFor="book">Book Name:</label>
                <input type="text" name="book" id="book" value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author Name:</label>
                <input type="text" name="author" id="author" value={author}
                onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <input type="text" name="image" id="image" value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="pdf">PDF URL:</label>
                <input type="text" name="pdf" id="pdf" value={pdfURL}
                onChange={(e) => setPdfURL(e.target.value)}/>
            </div>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default EditBook