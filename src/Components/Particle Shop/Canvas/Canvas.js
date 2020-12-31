import React, { useRef, useEffect, useState } from 'react';
import "./Canvas.css"

const Canvas = (props) => {


    const canvasRef = useRef(null)

    const draw = (ctx, frameCount, xPos1, xPos2, xPos3, xPos4, yPos1, yPos2, yPos3, yPos4, size) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = props.color
        ctx.beginPath()
        ctx.arc(xPos1, yPos1, size, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = props.subColor
        ctx.beginPath()
        ctx.arc(xPos2, yPos2, size / 2, 0, 2 * Math.PI)
        ctx.fill()




        ctx.fillStyle = props.subColor
        ctx.beginPath()
        ctx.arc(xPos3, yPos3, size / 2, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = props.subColor
        ctx.beginPath()
        ctx.arc(xPos4, yPos4, size / 2, 0, 2 * Math.PI)
        ctx.fill()
    }

    useEffect(() => {

        const canvas = canvasRef.current

        const circles = canvas.getContext('2d')

        let frameCount = 0;
        let xPos1 = props.width / 2;
        let yPos1 = 120;
        let velX1 = 5;
        let velY1 = 2;


        let xPos2 = (Math.random() * 100) + 100
        let yPos2 = (Math.random() * 70) + 5
        let velX2 = (Math.random() * 8);
        let velY2 = (Math.random() * 8);


        let xPos3 = (Math.random() * 100) + 100
        let yPos3 = (Math.random() * 70) + 5
        let velX3 = (Math.random() * 8) + 2
        let velY3 = (Math.random() * 8) + 2

        let xPos4 = (Math.random() * 100) + 100
        let yPos4 = (Math.random() * 70) + 5
        let velX4 = (Math.random() * 6) + 2
        let velY4 = (Math.random() * 6) + 2

        let animationFrameId

        //Our draw came here
        const render = () => {

            if (frameCount)
                frameCount++
            if (((xPos1 + 30) + 1) >= window.innerWidth) {
                velX1 = -velX1;

            }
            else if (((xPos1 + 30) - 1 <= 30)) {
                velX1 = -velX1
            }


            // Smaller balls being tossed around a bigger ball

            // Ball 1

            if (xPos2 > xPos1) {
                velX2--
            }
            if (xPos2 < xPos1) {
                velX2++
            }
            if (yPos2 > yPos1) {
                velY2--
            }
            if (yPos2 < yPos1) {
                velY2++
            }

            // Ball 2

            if (xPos3 > xPos1) {
                velX3--
            }
            if (xPos3 < xPos1) {
                velX3++
            }
            if (yPos3 > yPos1) {
                velY3--
            }
            if (yPos3 < yPos1) {
                velY3++
            }

            // Ball 3

            if (xPos4 > xPos1) {
                velX4--
            }
            if (xPos4 < xPos1) {
                velX4++
            }
            if (yPos4 > yPos1) {
                velY4--
            }
            if (yPos4 < yPos1) {
                velY4++
            }


            //xPos1 += velX1;
            xPos2 += velX2;
            xPos3 += velX3;
            xPos4 += velX4;
            yPos2 += velY2;
            yPos3 += velY3;
            yPos4 += velY4


            draw(circles, frameCount, xPos1, xPos2, xPos3, xPos4, yPos1, yPos2, yPos3, yPos4, 20)

            animationFrameId = window.requestAnimationFrame(render)


        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return (<canvas className="jumbotron-canvas" width={props.width} height={props.height} ref={canvasRef} />);
}

export default Canvas;