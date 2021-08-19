import React from 'react';


const Plant = (props) => {
    const { plant } = props
    return (
        <div>
        <h4>{plant.nickname}</h4>
        <img src={plant.image} alt='plant picture'/>
        </div>
    )
}

export default Plant