import React from 'react';


const PlantListItem = (props) => {
    const { plant } = props
    return (
        <div>
        <h4>{plant.nickname}</h4>
        <img src={plant.image} alt='plant'/>
        </div>
    )
}

export default PlantListItem