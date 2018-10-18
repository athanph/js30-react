import React, { Component } from 'react'

import './style.css'

class FlexGallery extends Component {
    toggleOpen(e) {
        e.currentTarget.classList.toggle('open')
    }

    toggleActive(e) {
        if (e.propertyName.includes('flex')) {
            e.target.classList.toggle('open-active')
        }
    }

    render() {
        return (
            <div className="panels">
                <div
                    className="panel panel1"
                    onClick={this.toggleOpen}
                    onTransitionEnd={this.toggleActive}
                >
                    <p>Hey</p>
                    <p>Let's</p>
                    <p>Dance</p>
                </div>
                <div
                    className="panel panel2"
                    onClick={this.toggleOpen}
                    onTransitionEnd={this.toggleActive}
                >
                    <p>Give</p>
                    <p>Take</p>
                    <p>Receive</p>
                </div>
                <div
                    className="panel panel3"
                    onClick={this.toggleOpen}
                    onTransitionEnd={this.toggleActive}
                >
                    <p>Experience</p>
                    <p>It</p>
                    <p>Today</p>
                </div>
                <div
                    className="panel panel4"
                    onClick={this.toggleOpen}
                    onTransitionEnd={this.toggleActive}
                >
                    <p>Give</p>
                    <p>All</p>
                    <p>You can</p>
                </div>
                <div
                    className="panel panel5"
                    onClick={this.toggleOpen}
                    onTransitionEnd={this.toggleActive}
                >
                    <p>Life</p>
                    <p>In</p>
                    <p>Motion</p>
                </div>
            </div>
        )
    }
}

export default FlexGallery
