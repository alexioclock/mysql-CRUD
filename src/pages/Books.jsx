import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Books = () => {

const [books, setBooks] = useState([])

useEffect(() => {
  const fetchAllBooks = async ()=>{
    try{
      const res = await axios.get("http://localhost:8800/books")
      setBooks(res.data)
    } catch(err){
        console.log(err)
    }
  }
  fetchAllBooks();
}, [])

const handleDelete = async (id) => {
    try {
        await axios.delete("http://localhost:8800/books/"+id)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
      <h1>Librairie</h1>
      <div className="books">
        {books.map((book) => (
            <div key={book.id} className="book">
                {book.cover && <img src={book.cover} alt="" />}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
                <button className="delete" onClick={()=> handleDelete(book.id)}>Supprimer</button>
                <button className="update"><Link to={`/update/${book.id}`}>Mettre à jour</Link></button>
            </div>
        ))}
      </div>
      <button><Link to="/add">Ajouter un livre new book</Link></button>
    </div>
  )
}

export default Books
