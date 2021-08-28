import React from 'react';


const PlantListItem = (props) => {
    const { plant } = props
    return (
        <div >
            <div className="plant-list-item">   
        <h4>{plant.nickname}</h4>
        <img src={plant.image} alt='plant'/>
        <p>H20 frequency: {plant.h20Frequency}</p>
        </ div>
        </div>
    )
}

export default PlantListItem