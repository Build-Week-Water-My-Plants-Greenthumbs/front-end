import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlant, toggleEdit, deletePlant } from "../actions";
import AddPlantForm from './AddPlantForm'




const Plant = (props) => {
    const { id } = useParams()
    const { push } = useHistory()
    useEffect(() => {
        props.fetchPlant(id)
    },[])

    const handleToggle = () => {
        props.toggleEdit()
    }
    const handleDelete = (e) => {
        e.preventDefault()
        props.deletePlant(id)
        push("/dashboard")
    }
    
  return (
      <div className="plant_container">
         <h4>{props.plant.plant.nickname}</h4>
         <p>{props.plant.plant.description}</p>
         <img src={props.plant.plant.image} alt='plant-pic'/>
         <button onClick= {handleToggle}> Edit Plant</button>
         <button onClick={() => push('/dashboard')}>Home</button>
         <button onClick={handleDelete}>Delete Plant</button>
         {props.plant.editing && <AddPlantForm plant={props.plant}/>}
      </div>
  );
};

const mapStateToProps = state => {
    return {
        plant: state.plant,
        editing: state.editing
    }
}


export default connect(mapStateToProps,{ fetchPlant, toggleEdit, deletePlant })(Plant);