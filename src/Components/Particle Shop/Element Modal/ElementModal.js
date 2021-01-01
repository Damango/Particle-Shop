import React from 'react';
import "./ElementModal.css"
import Canvas from "../Canvas/Canvas"
const ElementModal = (props) => {
    return (<div className="elemental-modal-container">
        <div className="close-element-modal" onClick={closeElementModal}>X</div>
        <div className="modal-left-side">
            <div className="modal-element-symbol">{props.data.symbol}</div>
            <Canvas sizes={50} width={550} height={900} color={props.data.color} subColor={props.data.subColor} />
            <div className="modal-element-price">{props.data.price}</div>
        </div>
        <div className="modal-right-side">
            <div className="modal-title">{props.data.name}</div>
            <div className="modal-atomic-number modal-category">Atomic Number: {props.data.elementNumber}</div>
            <div className="modal-atomic-weight modal-category">Atomic Weight: {props.data.elementWeight}</div>
            <div className="modal-description">A soft and conductive metal that holds an extremly high value in the Earth Economy.</div>
            <div className="right-side-footer">
                <input className="quantity-setter" />
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>


    </div>);



    function closeElementModal() {
        props.openModalSwitch()
    }

}

export default ElementModal;