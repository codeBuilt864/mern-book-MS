import React from 'react'
import Data from "../../../Server/data/pdfData.json"

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
             check? (
      <div>
        <button onClick={() => FileDownload(check, "Book.pdf")}>Download</button>
      </div>
    ) : (
      <div>
        <p>No PDF available</p>
      </div>
    )
  )
        </div>
      )
}

export default TestData