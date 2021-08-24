import React from "react";
import { connect } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { plantData } from "../dummyData";
import PlantListItem from './PlantListItem'

const LandingPage = (props) => {
  const { id } = useParams();
  console.log(plantData);
  return (
    <div>
      <h3>{props.username}</h3>
      <Link to='/add-plant'><button>Add New Plant</button></Link>

      {plantData.map((plant) => {
        return (
          <div key={plant.id}>
            <Link className='Links' to={`/plant/${plant.id}`}>
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
    username: state.user.username
  }
}

export default connect(mapStateToProps)(LandingPage);
