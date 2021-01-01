import React, { useState } from 'react';
import Canvas from "../Canvas/Canvas"
import ElementModal from "../Element Modal/ElementModal"
import "./PopularItem.css"
const PopularItem = (props) => {


    const [modalSwitch, setModalSwitch] = useState(0);



    return (<div className="popular-item-container" >
        {renderElementModal()}

        <div className="popular-item-wrapper" onClick={openModalSwitch}>

            <div className="item-header">

                <div className="element-name">{props.name}</div>
                <div className="element-symbol">{props.itemData.symbol}</div>
                <div className="element-number">{props.itemData.elementNumber}</div>
                <div className="element-weight">{props.itemData.elementWeight}</div>

            </div>
            <div className="element-container">
                <Canvas sizes={40} width={600} height={500} color={props.color} subColor={props.subColor} />
            </div>
            <div className="item-footer">
                <button className="buy-element-button">+ Add</button>
                <div className="element-price"> {props.itemData.price}</div>
            </div>
        </div>

    </div>);



    function openModalSwitch() {
        if (modalSwitch === 0) {
            setModalSwitch(1)
        }
        else if (modalSwitch === 1) {
            setModalSwitch(0)
        }

    }

    function renderElementModal() {
        if (modalSwitch === 1) {
            return (<ElementModal openModalSwitch={openModalSwitch} data={props.itemData} />)
        }
    }
}

export default PopularItem;