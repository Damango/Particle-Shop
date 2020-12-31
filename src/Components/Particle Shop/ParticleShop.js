import React from 'react';
import "./ParticleShop.css"
import shopData from "../../elements.json"
import Canvas from "./Canvas/Canvas"
import PopularItem from "./PopularItem/PopularItem"
const ParticleShop = () => {
    return (<div className="particle-shop-wrapper">


        <div className="shop-header">
            <div className="header-title">Particle Shop</div>
            <div className="shopping-bag"></div>

        </div>
        <div className="shop-jumbotron">

        </div>
        <div className="popular-items">
            {shopData.map((item) => <PopularItem name={item.name} color={item.color} subColor={item.subColor} />)}

        </div>
        <div className="about-me-container"></div>

    </div>);
}

export default ParticleShop;