import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { plantCreater } from '../actions'
import { connect } from 'react-redux';
import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
const AddPlantForm = (props) => {
  const { push } = useHistory();
  const [plant, setPlant] = useState({ // local state for changes
    plantId: '',
    name: '',
    nickname: '',
    species: '',
    frequency: '',
  });
  const handleChange = (e) => {
      setPlant({
          ...plant, [e.target.name]: e.target.value
      })
  }
  const handleSubmit = (e) => {
      e.preventDefault();
    //   axiosWithAuth()
    //   .post("https://water-plants-matt.herokuapp.com/api/plants", plant)
    //   .then(res => {
    //       console.log(res)
    //       push('/dashboard')
    //     })
    //   .catch(err => console.log(err))
    console.log(plant)
    props.plantCreater(plant)
      
  }

  return (
      <div>
          <form onSubmit={handleSubmit}>
          <label htmlFor='name'>
                  <input type='text' name='name' placeholder='Enter name' value={plant.name} onChange={handleChange}/>
              </label>
              <label htmlFor='nickname'>
                  <input type='text' name='nickname' placeholder='Enter nickname' value={plant.nickname} onChange={handleChange}/>
              </label>
              <label htmlFor='species'>
                  <input type='text' name='species' placeholder='Enter species' value={plant.species} onChange={handleChange}/>
              </label>
              <label htmlFor='h2oFrequency'>
                  <input type='text' name='frequency' placeholder='Enter h2oFrequency' value={plant.frequency} onChange={handleChange}/>
              </label>
              <button>Submit</button>
          </form>
          <button onClick={() => push('/dashboard')}>Cancel</button>
      </div>
  )
} 
const mapStateToProps = (state) => {
    return {
        plant: state.plant,
    }
}

export default connect(mapStateToProps,{ plantCreater })(AddPlantForm)
