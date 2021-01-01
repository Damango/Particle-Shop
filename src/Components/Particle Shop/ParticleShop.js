import React, { useState } from 'react';
import "./ParticleShop.css"
import shopData from "../../elements.json"
import Canvas from "./Canvas/Canvas"
import BodyCanvas from "./Canvas/BodyCanvas"
import PopularItem from "./PopularItem/PopularItem"
import GlowingCube from "./GlowingCube/GlowingCube"
const ParticleShop = () => {


    let pShape = [

        [{ color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }],
        [{ color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }],
        [{ color: "black" }, { color: "black" }, { color: "white" }, { color: "white" }, { color: "black" }, { color: "black" }],
        [{ color: "black" }, { color: "black" }, { color: "white" }, { color: "white" }, { color: "black" }, { color: "black" }],
        [{ color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }],
        [{ color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }],
        [{ color: "black" }, { color: "black" }],
        [{ color: "black" }, { color: "black" }],
        [{ color: "black" }, { color: "black" }]


    ]




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
        <div className="about-me-container">

            <div className="about-us-title">- About Us -</div>
            <div className="about-us-wrapper">

                <div className="about-us-art">


                    {pShape.map((shape) =>
                        <div className="cube-row">
                            {shape.map((box) => <GlowingCube color={box.color} />)}
                        </div>)}


                </div>

                <div className="about-us-text">
                    <div className="text-body-1">Our goal here at Partycle Labs to provide quality elements with 0.000001% impurity rate. Our army of Asteroid Miners creates the most affordable price of elements in the entire galaxy</div>
                    <div className="text-body-1">The elements in our shop come from the highest quality Asteroids that have been roaming around in a vaccum for milenia.</div>
                </div>

            </div>

        </div>

    </div>);
}

export default ParticleShop;