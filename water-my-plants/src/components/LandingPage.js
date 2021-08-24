import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PlantListItem from './PlantListItem'
import { fetchPlantList } from '../actions'

const LandingPage = (props) => {
  useEffect(() => {
    props.fetchPlantList()
  },[])
  return (
    <div>
      <h3>{props.username}</h3>
      <Link to='/add-plant'><button>Add New Plant</button></Link>

      {props.plant.plantsList.map((plant) => {
        return (
          <div key={plant.plantId}>
            <Link className='Links' to={`/plant/${plant.plantId}`}>
              <PlantListItem plant={plant}/>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.user.user.username,
    plant: state.plant
  }
}

export default connect(mapStateToProps,{ fetchPlantList })(LandingPage);
