import React from 'react';
import "./ParticleShop.css"
import shopData from "../../elements.json"
import Canvas from "./Canvas/Canvas"
const ParticleShop = () => {
    return (<div className="particle-shop-wrapper">


        <div className="shop-header">
            <div className="header-title">Particle Shop</div>
            <div className="shopping-bag"></div>

        </div>
        <div className="shop-jumbotron">
            <Canvas />
        </div>
        <div className="popular-items"></div>
        <div className="about-me-container"></div>

    </div>);
}

export default ParticleShop;