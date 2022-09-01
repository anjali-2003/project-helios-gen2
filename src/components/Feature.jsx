
import React from "react";
import featuredata from "../featuredata";
import { useParams } from "react-router-dom";

function Feature() {
    const params = useParams();
    const id=params.id
    return <div className="feature">
        <img className='feat-img' src={featuredata[id].img} alt='MainImage' />
        <p className="feat-pt">{featuredata[id].detail}</p> 
    </div>
}

export default Feature;