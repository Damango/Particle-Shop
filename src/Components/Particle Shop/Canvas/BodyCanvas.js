import React, { useRef, useEffect, useState } from 'react';
import "./BodyCanvas.css"

const BodyCanvas = (props) => {




    const canvasRef = useRef(null)

    const draw = (ctx, frameCount, size) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(50, 50, size, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fill()
    }




    useEffect(() => {

        const canvas = canvasRef.current

        const circles = canvas.getContext('2d')

        let frameCount = 0;



        let animationFrameId

        //Our draw came here
        const render = () => {

            if (frameCount)
                frameCount++
            draw(circles, frameCount, 20)

            animationFrameId = window.requestAnimationFrame(render)


        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return (<canvas className="body-canvas-container" width={props.width} height={props.height} ref={canvasRef} />);
}

export default BodyCanvas;