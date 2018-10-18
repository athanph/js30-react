import React, { Component } from 'react'

import './style.css'

class ClickDrag extends Component {
    state = {
        isActive: false,
        startX: 0,
        scrollLeft: 0,
    }

    handleActive = e => {
        this.setState({
            isActive: true,
            startX: e.screenX - this.slider.offsetLeft,
            scrollLeft: this.slider.scrollLeft,
        })
    }

    handleInactive = () => {
        this.setState({ isActive: false })
    }

    handleMouseMove = e => {
        const { isActive, startX, scrollLeft } = this.state

        if (!isActive) return
        e.preventDefault()

        const x = e.screenX - this.slider.offsetLeft
        const walk = (x - startX) * 3

        this.slider.scrollLeft = scrollLeft - walk
    }

    render() {
        return (
            <div
                className={`items ${this.state.isActive ? 'active' : ''}`}
                onMouseDown={this.handleActive}
                onMouseLeave={this.handleInactive}
                onMouseUp={this.handleInactive}
                onMouseMove={this.handleMouseMove}
                ref={el => (this.slider = el)}
            >
                {Array.from(Array(25).keys()).map(i => {
                    return (
                        <div key={i} className={`item item${i}`}>
                            {i}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ClickDrag
