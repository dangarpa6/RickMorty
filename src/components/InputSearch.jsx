import React, { useEffect } from 'react'
import { useState } from 'react'


const InputSearch = ({ setSearchLocation }) => {
 

  const searchLocation = e => {
    e.preventDefault() //Evitar que se recargue
    setSearchLocation(e.target.children[0].value) //capturar informacion del formulario
  }
 

  return (
    <form onSubmit={searchLocation}>
      <input className='input-bar' type="text" />
      <button>Search</button>
    </form>
  )
}

export default InputSearch