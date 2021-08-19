import React from "react";
import { Link, useParams } from "react-router-dom";
import { plantData } from "../dummyData";
import Plant from './Plant'

const LandingPage = () => {
  const { id } = useParams();
  console.log(plantData);
  return (
    <div>
      <h3>Username goes here...</h3>
      {plantData.map((plant) => {
        return (
          <div key={plant.id}>
            <Link to={`/plant/${plant.id}`}>
              <Plant plant={plant}/>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
