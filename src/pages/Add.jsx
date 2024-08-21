import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Add = () => {
    const [book, setBook] = useState({
        title:"",
        desc: "",
        price: null,
        cover: "",
    });

    const navigate = useNavigate()
    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/books", book) 
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    console.log(book)
  return (
    <div className='form'>
      <h1>Ajouter un livre</h1>
      <input type="text" placeholder='titre' name='title'onChange={handleChange}/>
      <input type="text" placeholder='desc'name='desc' onChange={handleChange}/>
      <input type="number" placeholder='price' name='price' onChange={handleChange}/>
      <input type="text" placeholder='cover' name='cover' onChange={handleChange}/>
      <button onClick={handleClick}>Ajouter</button>
    </div>
  )
}

export default Add
