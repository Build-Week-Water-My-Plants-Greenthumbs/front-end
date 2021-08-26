import React from 'react';


const PlantListItem = (props) => {
    const { plant } = props
    return (
        <div>
        <h4>{plant.nickname}</h4>
        <img src={plant.image} alt='plant'/>
        <p>H20 frequency: {plant.frequency}</p>
        </div>
    )
}

export default PlantListItem