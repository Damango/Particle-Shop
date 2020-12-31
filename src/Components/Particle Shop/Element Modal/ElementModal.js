import React from 'react';
import "./ElementModal.css"
import Canvas from "../Canvas/Canvas"
const ElementModal = (props) => {
    return (<div className="elemental-modal-container">
        <div className="modal-left-side">
            <Canvas sizes={60} width={550} height={900} color={props.data.color} subColor={props.data.subColor} />
        </div>
        <div className="modal-right-side">
            <div className="modal-title">{props.data.name}</div>
        </div>


    </div>);
}

export default ElementModal;