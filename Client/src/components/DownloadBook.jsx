import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../../../Server/data/pdfData.json";
import TestData from "./TestData";
import FileDownload from "js-file-download";
import axios from "axios";

const DownloadBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //  const url = `http://localhost:3001/book/book/${id}/post?.pdfURL`

  useEffect(() => {
    Data.map((book) => {
      if(book.id === id ) {
        fetch(book.pdfURL)
      
        .then((res) => res.blob())
        .then((file) => {
          // URL.createObjectURL creates a url of passed object
          let tempUrl = URL.createObjectURL(file);
          let aTag = document.createElement("a");
          aTag.href = tempUrl; // passing tempUrl as href value of <a> tag
          // passing file last name @ extention as download value of <a> tag
          aTag.download = book.pdfURL.replace(/^.*[\\\/]/, "");
          document.body.appendChild(aTag); // adding <a> tag inside body
          aTag.click(); //clicking <a> tag so the file download
          aTag.remove(); //removing <a> tag once file is downloaded
          URL.revokeObjectURL(tempUrl); //removing tempURL from the document
          navigate("/books");
        })
        .catch((err) => {
          console.log(err);
      });
      } 
 
  });
}, []);

  // return (
  //   post?.pdfURL? (
  //     <div>
  //       <button onClick={() => FileDownload(post?.pdfURL, "Book.pdf")}>Download</button>
  //     </div>
  //   ) : (
  //     <div>
  //       <p>No PDF available</p>
  //     </div>
  //   )
  // )
};

export default DownloadBook;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import FileDownload from "js-file-download"
// import Data from "../../../Server/data/pdfData.json"

// const DownloadBook = () => {
//   const navigate = useNavigate()
//   const {id} = useParams()

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/book/book/" + id,{
//         responseType: "Blob"
//   })
//       .then((obj) => {
//         // console.log(res)
//         // FileDownload(res.data, "download")
//         const url = URL.createObjectURL(obj.data)
//         const a = document.createElement('a')
//         a.href = url;
//         a.download = 'random-image.jpg'
//         document.body.appendChild(a);
//         a.click();
//         a.remove();
//         URL.revokeObjectURL(url);
//         navigate('/books')
//         console.log(url)
//       })
//       .catch((err) => console.log(err));
//   }, []);
// };

// return (
//   <div>
//     {
//       Data.map(post => (
//         <h2>{post.pdfURL}</h2>

//       ))
//     }
//   </div>
// )


// function fetchFile(url) {
//   // fetching file @ returning respones as blob
//   fetch(url)
//      .then(res => res.blob())
//      .then(file => {
//       // URL.createObjectURL creates a url of passed object
//       let tempUrl = URL.createObjectURL(file)
//       let aTag = document.createElement("a")
//       aTag.href = tempUrl; // passing tempUrl as href value of <a> tag
//       // passing file last name @ extention as download value of <a> tag
//       aTag.download = url.replace(/^.*[\\\/]/, '');
//       document.body.appendChild(aTag); // adding <a> tag inside body
//       aTag.click(); //clicking <a> tag so the file download
//       aTag.remove(); //removing <a> tag once file is downloaded
//       URL.revokeObjectURL(tempUrl); //removing tempURL from the document
//       downloadBtn.innerText = "Downloading file.."

//      }).catch (() => {
//       // catch method will call if any error comes during downloading process
//       downloadBtn.innerText = "Download File"
//       alert("Something went wrong")
//      })

// }
