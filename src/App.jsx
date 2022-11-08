import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useLocation from './assets/hooks/useLocation'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import InputSearch from './components/InputSearch'
import Rick from './assets/Pictures/Rick.png'
import vortix from './assets/Pictures/vortix.png'
import vortix1 from './assets/Pictures/vortix1.png'
import title from './assets/Pictures/title.png'
import rickandmorty from './assets/Pictures/rickandmorty.png'

function App() {

  const [searchLocation, setSearchLocation] = useState()

  const location = useLocation(searchLocation)


  return (
    <div className="App">
      <div className='Head'>
        <img src={rickandmorty}  alt="" />
        <img src={title}  alt="" />

      </div>
      <InputSearch setSearchLocation={setSearchLocation} />
      <LocationInfo location={location} />
      <div className='card_box'>
        {
          location?.residents.map(resident => (
            <CardResident key={resident}
              resident={resident} />
          ))
        }
      </div>
    </div>
  )
}

export default App
