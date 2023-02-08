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
            let k = response.data.slip.advice;
            setAdvice(k)
        })
        .catch((error)=>{
            console.log(error);
        });
  }
  return (
    <div>
    <span>
        {advice}
    </span>
    </div>
  )
}

export default App