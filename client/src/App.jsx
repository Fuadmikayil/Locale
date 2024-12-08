import React, { useState } from 'react'
import "./i18n"

const App = () => {
  const [darkmode,setdarkmod] = useState(false)
  const changeDarkMode= () =>{
    setdarkmod(!darkmode)
  }
  return (
    <div>
      <h1 className='text-8xl text-purple-700'>Dark mode : {darkmode ? "true" : "false" }</h1>
      <button className='bg-purple-700 px-8 py-4 text-4xl uppercase rounded-2xl text-white' onClick={changeDarkMode}>change mode</button>
    </div>
  )
}

export default App