import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPlant } from '../actions'
import { connect } from 'react-redux';
const AddPlantForm = () => {
  const { push } = useHistory();
  const [plant, setPlant] = useState({ // local state for changes
    id: "",
    nickname: "",
    species: "",
    h2oFrequency: "",
  });
  const handleChange = (e) => {
      setPlant({
          ...plant, [e.target.name]: e.target.value
      })
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      createPlant(plant)
      push('/dashboard')
  }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor='nickname'>
                  <input type='text' name='nickname' placeholder='Enter nickname' value={plant.nickname} onChange={handleChange}/>
              </label>
              <label htmlFor='species'>
                  <input type='text' name='species' placeholder='Enter species' value={plant.species} onChange={handleChange}/>
              </label>
              <label htmlFor='h2oFrequency'>
                  <input type='text' name='h2oFrequency' placeholder='Enter h2oFrequency' value={plant.h2oFrequency} onChange={handleChange}/>
              </label>
              <button>Submit</button>
          </form>
          <button onClick={() => push('/dashboard')}>Cancel</button>
      </div>
  )
} 

export default connect(null,{ createPlant })(AddPlantForm)
