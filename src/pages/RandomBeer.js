import {useState, useEffect} from "react"
import Header from "../components/Header"
import axios from "axios"

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState([])
    const getRandomBeer = async () => {
        const {data} = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        setRandomBeer(() => data)
    }
    useEffect(() => {
        try {
            getRandomBeer()
        } catch (error) {
            console.log(error)
        }
    } , [])
  return (
    <div>
         <Header/>
            <div>
            <img src={randomBeer.image_url} alt={randomBeer.name} />
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
            </div>
    </div>
  )
}

export default RandomBeer