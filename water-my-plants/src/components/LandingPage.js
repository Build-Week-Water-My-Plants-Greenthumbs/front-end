import React from "react";
import { Link, useParams } from "react-router-dom";
import { plantData } from "../dummyData";
import PlantListItem from './PlantListItem'

const LandingPage = () => {
  const { id } = useParams();
  console.log(plantData);
  return (
    <div>
      <h3>Username goes here...</h3>
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

export default LandingPage;
