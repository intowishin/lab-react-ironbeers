import {useState, useEffect} from "react"
import Header from "../components/Header"
import axios from "axios"
import { useParams } from "react-router-dom";

function Beer() {
    const { beerId } = useParams('beerId');
    const [beer, setBeer] = useState([])
    const getBeer = async () => {
        const {data} = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        setBeer(() => data)
        console.log(data)
    }
    useEffect(() => {
        try {
            getBeer()
        } catch (error) {
            console.log(error)
        }
    } , [])
  return (
    <div>
         <Header/>
            <div>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
            </div>
    </div>
  )
}

export default Beer