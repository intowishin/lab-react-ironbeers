import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <Link to="/beers">All Beers</Link>
        <br />
        <Link to="/randombeer">Random Beer</Link>
        <br />
        <Link to="/newbeer">New Beer</Link>
        <br />
    </div>
  )
}

export default Home