import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PlantListItem from './PlantListItem'
import WaterTime from "./WaterTime";
import { fetchPlantList, authUser } from '../actions'

const LandingPage = (props) => {

  const { username, fetchPlantList, plantsList, loggedIn, authUser } = props;

  useEffect(() => {
    if(!loggedIn && localStorage.getItem('token')) {
      authUser();
    };
    fetchPlantList();
  },[]);

  return (

    <div className="landing_page_container">
      <div className="landing_page"></div>
      <h3> Welcome, {username}</h3>

      <Link to='/add-plant'><button>Add New Plant</button></Link>

      {plantsList.map((plant) => {
        return (
          <div key={plant.plantId}>
            <Link className='Links' to={`/plant/${plant.plantId}`}>
              <PlantListItem plant={plant}/>
            </Link>

            <WaterTime frequency = {plant.frequency} lastWatered = {plant.lastWatered} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.user.user.username,
    loggedIn: state.user.loggedIn,
    plantsList: state.plant.plantsList
  }
}

export default connect(mapStateToProps,{ fetchPlantList, authUser })(LandingPage);
