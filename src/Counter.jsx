import React, { useState } from 'react';

import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import Button from '@material-ui/core/Button';
import "./App.css";
import "./index.css"

const Counter = () => {
    const [counterValue, setcounterValue] = useState(0);
    let increment = () => {
        setcounterValue(counterValue + 1);
        console.log(typeof (counterValue));
    }
    let decrement = () => {
        if (counterValue >= 1) {
            setcounterValue(counterValue - 1);
        } else {
            alert('Can not decrease the value below 0');
        }
    }

    return (
        <><div className="container">
            <div className="appFrame">
                <h1>{counterValue}</h1>
                <div className="innerDiv">
                    <Button  className="btn" onClick={increment}>
                        <PlusOneIcon />
                    </Button>
                    <Button  className="btn" onClick={decrement}>
                        <ExposureNeg1Icon />
                    </Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Counter;