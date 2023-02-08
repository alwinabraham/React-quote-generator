import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [advice,setAdvice] = useState('')

  useEffect(() => {
    fetchAdvice()
  })
  
  const fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            setAdvice(response.data.slip.advice)
        })
        .catch((error)=>{
            console.log(error);
        });
  }
  return (
    <div className='container'>

    <span><h1>{advice}</h1></span>
    </div>
  )
}

export default App