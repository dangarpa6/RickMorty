import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useCharacter from '../assets/hooks/useCharacter'


const CardResident = ({resident}) => {

  const character = useCharacter(resident)
    
    
  return (
    <div className='cardd'>
    <article >
      <header>
        <div className='boxpic'>
        <img className='pic' src={character?.image} alt={`image of ${character?.name}`} />
        </div>
        <div>
        <div className='circle'></div>
        
        </div>
      </header>
      <div className='card-content'>
        <h3 className='name-character' >{character?.name} </h3>
        <ul className='list-character'>
          <li><span >Specie: </span>{character?.species} </li>
          <li><span >Origin: </span>{character?.origin?.name} </li>
          <li><span >Episodes: </span>{character?.episode?.length} </li>
        </ul>
        <button className='status'>{character?.status} </button>
      </div>
    </article>
    </div>
  )
}

export default CardResident