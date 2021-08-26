import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { plantCreater } from '../actions'
import { connect } from 'react-redux';

const AddPlantForm = (props) => {
  const { push } = useHistory();
  const [plantForm, setPlantForm] = useState({ // local state for changes
    name: '',
    nickname: '',
    species: '',
    frequency: 3,
  });

  const handleChange = (e) => {
      setPlantForm({
          ...plantForm, [e.target.name]: e.target.value
      })
  }

  const handleChangeInt = (e) => {
      setPlantForm({
          ...plantForm,
          frequency: parseInt(e.target.value) 
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plantForm)
    props.plantCreater(plantForm)
    push("/dashboard")
      
  }

  return (
      <div className="edit_plant">
          <h2> Edit Your Plant</h2>
          <form onSubmit={handleSubmit}>
              <div>
<div className="add-plant-input1">
          <label htmlFor='name'>
                  <input type='text' name='name' placeholder='Enter name' value={plantForm.name} onChange={handleChange}/>
              </label>
              </div>
              <div className="add-plant-input1">
              <label htmlFor='nickname'>
                  <input type='text' name='nickname' placeholder='Enter nickname' value={plantForm.nickname} onChange={handleChange}/>
              </label>
              </div>
              <div className="add-plant-input1">
              <label htmlFor='species'>
                  <input type='text' name='species' placeholder='Enter species' value={plantForm.species} onChange={handleChange}/>
              </label>
              </div>
              <div className="add-plant-input1">
              <label>
                  <input type='number' name='frequency' placeholder='Enter h2oFrequency' value={plantForm.frequency} onChange={handleChangeInt}/>
              </label>
              </div>
              </ div>
              <div className="submit_button">
              <button>Submit</button>
              </ div>
              
          </form>
          <div className="cancel_button">   
          <button onClick={() => push('/dashboard')}>Cancel</button>
          </div>
      </div>
  );
  
} 


export default connect(null, { plantCreater })(AddPlantForm)
