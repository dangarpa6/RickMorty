import axios from 'axios'
import {
    useState,
    useEffect
} from 'react'

const useLocation = searchLocation => {

    const [location, setLocation] = useState()

    useEffect(() => {
        let locationNumber
        if (searchLocation) {
            locationNumber = searchLocation
        } else {
            locationNumber = Math.floor(Math.random() * (126 - 1) + 1)
        }
        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
        axios.get(URL)
            .then(res => setLocation(res.data))
            .catch(err => console.log(err))
    }, [searchLocation])

    return location

}

export default useLocation