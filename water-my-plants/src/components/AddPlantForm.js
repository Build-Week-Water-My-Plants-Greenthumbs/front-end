import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { plantCreater, toggleEdit, editPlant } from '../actions'
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
      console.log(props)
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
      console.log(props)
    e.preventDefault();
    console.log(plantForm)
    if (props.editing) {
        
        props.editPlant(parseInt(props.id), plantForm)
    } else {
        props.plantCreater(plantForm)
    }
    
    push("/dashboard")
      
  }

  return (
      <div className="edit_plant">
          { props.editing ? <h2>Edit Plant</h2> : <h2>Add Plant</h2>}
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
          <button onClick={() => {
              props.toggleEdit()
              push('/dashboard')
          }}>Cancel</button>
          </div>
      </div>
  );
  
} 
const mapStateToProps = (state) => {
    return {
        editing: state.plant.editing
    }
}

export default connect(mapStateToProps, { plantCreater, toggleEdit,editPlant })(AddPlantForm)
