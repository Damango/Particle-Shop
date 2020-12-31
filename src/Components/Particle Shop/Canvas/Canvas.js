import React, { useRef, useEffect, useState } from 'react';
import "./Canvas.css"

const Canvas = () => {


    const canvasRef = useRef(null)

    const draw = (ctx, frameCount, xPos1, xPos2, xPos3, yPos1, yPos2, yPos3, size) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(xPos1, yPos1, size, 0, 2 * Math.PI)
        ctx.fill()

        ctx.fillStyle = 'blue'
        ctx.beginPath()
        ctx.arc(xPos2, yPos2, size / 2, 0, 2 * Math.PI)
        ctx.fill()




        ctx.fillStyle = 'blue'
        ctx.beginPath()
        ctx.arc(xPos3, yPos3, size / 2, 0, 2 * Math.PI)
        ctx.fill()
    }

    useEffect(() => {

        const canvas = canvasRef.current

        const circles = canvas.getContext('2d')

        let frameCount = 0;
        let xPos1 = 300;
        let yPos1 = 100;
        let velX1 = 5;
        let velY1 = 2;


        let xPos2 = 900
        let yPos2 = 500
        let velX2 = 3;
        let velY2 = 3;


        let xPos3 = 600;
        let yPos3 = 100;
        let velX3 = 2;
        let velY3 = 8;

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


            //xPos1 += velX1;
            xPos2 += velX2;
            xPos3 += velX3;
            yPos2 += velY2;
            yPos3 += velY3;


            draw(circles, frameCount, xPos1, xPos2, xPos3, yPos1, yPos2, yPos3, 100)

            animationFrameId = window.requestAnimationFrame(render)


        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return (<canvas className="jumbotron-canvas" width={window.innerWidth} height={200} ref={canvasRef} />);
}

export default Canvas;