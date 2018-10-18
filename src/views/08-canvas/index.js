import React, { Component } from 'react'

class Canvas extends Component {
    state = {
        isDrawing: false,
        lastX: 0,
        lastY: 0,
        hue: 0,
        direction: true,
    }

    draw = e => {
        const ctx = this.refDraw.getContext('2d')
        const { isDrawing, lastX, lastY, hue, direction } = this.state

        if (!isDrawing) return

        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
        ctx.beginPath()
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        ctx.stroke()

        this.setState(
            {
                lastX: e.nativeEvent.offsetX,
                lastY: e.nativeEvent.offsetY,
                hue: hue >= 360 ? 0 : hue + 1,
                direction:
                    ctx.lineWidth >= 100 || ctx.lineWidth <= 1
                        ? !direction
                        : direction,
            },
            () => (this.state.direction ? ctx.lineWidth++ : ctx.lineWidth--)
        )
    }

    stopDraw = () => this.setState({ isDrawing: false })

    initDraw = e => {
        this.setState({
            isDrawing: true,
            lastX: e.nativeEvent.offsetX,
            lastY: e.nativeEvent.offsetY,
        })
    }

    componentDidMount() {
        const canvas = this.refDraw
        const ctx = canvas.getContext('2d')

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.strokeStyle = '#BADA55'
        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.lineWidth = 100
        // ctx.globalCompositeOperation = 'multiply'
    }

    render() {
        return (
            <canvas
                id="draw"
                ref={el => (this.refDraw = el)}
                width="800"
                height="800"
                onMouseDown={this.initDraw}
                onMouseMove={this.draw}
                onMouseUp={this.stopDraw}
                onMouseOut={this.stopDraw}
            />
        )
    }
}

export default Canvas
