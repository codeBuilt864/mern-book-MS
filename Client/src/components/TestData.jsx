import React from 'react'
import Data from "../../../Server/data/pdfData.json"
import '../css/Book.css'

const TestData = () => {
    return (
        <div>
          {
            Data.map((post) => (
              <div key={post.id}>
                <h3>{post.name}</h3>
                <p>{post.author}</p>
                <a href={post.pdfURL} download={post.name}>
                  Download
                </a>
              </div>
            ))
          }
        </div>
      )
}

export default TestData