import Header from "../components/Header"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Beers() {

    const [beers, setBeers] = useState([])
    const getBeers = async () => {
        const {data} = await axios.get(" https://ih-beers-api2.herokuapp.com/beers")
        setBeers(() => data)
        console.log(data)
    }
    useEffect(() => {
        try {
            getBeers()
        } catch (error) {
            console.log(error)
        }
    } , [])


  return (
    <div>
        <Header/>
        {beers.map(beer => (
            <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt={beer.name} /></Link>
            <Link to={`/beers/${beer._Id}`}><h3>{beer.name}</h3></Link>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            </div>
        ))}

    </div>
  )
}

export default Beers