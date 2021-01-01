import React, { useState } from 'react';
import "./ParticleShop.css"
import shopData from "../../elements.json"
import Canvas from "./Canvas/Canvas"
import PopularItem from "./PopularItem/PopularItem"
const ParticleShop = () => {




    return (<div className="particle-shop-wrapper">


        <div className="shop-header">
            <div className="header-title">Particle Shop</div>
            <div className="shopping-bag"><i class="fas fa-shopping-cart"></i></div>

        </div>
        <div className="shop-jumbotron">
            <div className="jumbo-text-1 jumbo-text">PARTYCLE LABS</div>
            <div className="jumbo-text-2 jumbo-text">Where the purest particles are harvested and created from the most exotic materials</div>
            <button className="jumbo-button">Buy Now</button>
        </div>
        <div className="popular-items">
            <div className="popular-items-title">- Popular Items -</div>
            <div className="popular-items-wrapper">
                {shopData.map((item) => <PopularItem itemData={item} name={item.name} color={item.color} subColor={item.subColor} />)}
            </div>
        </div>
        <div className="about-me-container"></div>

    </div>);
}

export default ParticleShop;