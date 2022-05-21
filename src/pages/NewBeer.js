import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function NewBeer() {
const navigateTo = useNavigate();

  const defaultFormData = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attentuation_level: 0,
    contributed_by: '',
  },

  [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const sendDataToApi = async () => {
    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData);
    navigateTo('/beers')
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      sendDataToApi();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <div>
        <h1>New Beer</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} />
          <br />

          <label>Tagline:</label>
          <input type="text" name="tagline" onChange={handleChange}/>
          <br />

          <label>Description:</label>
          <input type="text" name="description" onChange={handleChange}/>
          <br />

          <label>First Brewed:</label>
          <input type="text" name="first_brewed" onChange={handleChange}/>
          <br />

          <label>Brewers Tips:</label>
          <input type="text" name="brewers_tips" onChange={handleChange}/>
          <br />

          <label>Attenuation Level:</label>
          <input type="number" name="attenuation_level" onChange={handleChange}/>
          <br />

          <label>Contributed By:</label>
          <input type="text" name="contributed_by" onChange={handleChange}/>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
