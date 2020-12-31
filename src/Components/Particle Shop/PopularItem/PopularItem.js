import React from 'react';
import Canvas from "../Canvas/Canvas"
import "./PopularItem.css"
const PopularItem = (props) => {
    return (<div className="popular-item-container">
        <div className="item-header">{props.name}</div>
        <div className="element-container">
            <Canvas width={300} height={260} color={props.color} subColor={props.subColor} />
        </div>
        <div className="item-footer"></div>


    </div>);
}

export default PopularItem;