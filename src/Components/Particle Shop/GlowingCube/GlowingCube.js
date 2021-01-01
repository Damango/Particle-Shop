import React from 'react';
import "./GlowingCube.css"

const GlowingCube = (props) => {








    let theStyle = {

        animationDelay: Math.random() * 4 + 's'
    }

    let stopAnimation = {
        backgroundColor: "transparent"
    }
    //document.querySelector(".white-bubble").style.animationDelay = "1s";

    if (props.color === 'white') {
        return (<div className="blank">
            <div className='blank' style={theStyle}></div>
        </div>)
    }

    return (<div className="glowing-cube-container">
        <div className='white-bubble' style={theStyle}></div>
    </div>);
}

export default GlowingCube;