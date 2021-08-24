import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlant, toggleEdit } from "../actions";
import AddPlantForm from './AddPlantForm'




const Plant = (props) => {
    const { id } = useParams()
    const [plant, setPlant] = useState(props.plant)
    useEffect(() => {
        fetchPlant(plant.plantId)
    },[])
    
  return (
      <div>
         <h4>{plant.nickname}</h4>
         <button onClick= {() => props.toggleEdit()}> Edit Plant</button>
         {props.editing && <AddPlantForm plant={plant}/>}
      </div>
  );
};

const mapStateToProps = state => {
    return {
        plant: state.plant,
        editing: state.editing
    }
}


export default connect(mapStateToProps,{ fetchPlant, toggleEdit })(Plant);