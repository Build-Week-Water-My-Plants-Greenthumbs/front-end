import React from "react";
import { Link, useParams } from "react-router-dom";
import { plantData } from "../dummyData";

const LandingPage = () => {
  const { id } = useParams();
  console.log(plantData);
  return (
    <div>
      <h3>Username goes here...</h3>
      {plantData.map((plant) => {
        return (
          <div key={plant.id}>
            <h4>{plant.nickname}</h4>
            <Link to={`/plant/${id}`}>
              <img src={plant.species.image} alt="plant img" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
