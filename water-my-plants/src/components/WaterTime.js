import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { waterPlant } from '../actions/index';

//on plant card render this component and pass its lastWatered, & frequency props to this component

const WaterTime = (props) => {
    const { lastWatered, frequency } = props
    const [watered, setWatered] = useState('Needs Water');

    const handleWaterTime = (lastWateredState, frequencyState) => {
        //convert the frequency to hours
        const frequencyInHours = frequencyState * 24;
        //convert milliseconds to hour
        const oneHour = 3600000;
        //convert lastWateredTimeStamp to milliseconds with Date.parse() & then hours
        const lastWateredInHours = Date.parse(lastWateredState) /oneHour;
        //fetch current time in hours
        const currentTime = Date.now()/oneHour;
        //solve time between now and last watering
        const timeSinceWatered = currentTime - lastWateredInHours;
        //compare time difference to watering frequency for plant
        if (timeSinceWatered >= frequencyInHours) {
            setWatered("Needs Water");
        } else {
            setWatered("Watered");
        };

    };
    //call action to reset lastWatering state of plant to current timestamp
    const handleWatering = () => {

        const time = new Date();
        waterPlant(time)
    }

    useEffect(() => {
        handleWaterTime(lastWatered, frequency);
        
    }, [lastWatered]);

    return (
        <div>
            <p>{watered}</p>
            <button onClick={handleWatering}>Water Me!</button>
        </div>
    )
};


export default connect(null, { waterPlant })(WaterTime);
