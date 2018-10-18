import React, { Component } from 'react'

import './style.css'

class Clock extends Component {
    state = {
        seconds: '',
        minutes: '',
        hour: '',
    }

    componentDidMount() {
        setInterval(this.initDate, 1000)

        this.initDate()
    }

    render() {
        const { hour, minutes, seconds } = this.state

        return (
            <div className="clock">
                <div className="clock-face">
                    <div
                        className="hand hour-hand"
                        style={{ transform: `rotate(${hour}deg)` }}
                    />
                    <div
                        className="hand min-hand"
                        style={{ transform: `rotate(${minutes}deg)` }}
                    />
                    <div
                        className="hand second-hand"
                        style={{ transform: `rotate(${seconds}deg)` }}
                    />
                </div>
            </div>
        )
    }

    initDate = () => {
        const now = new Date()

        const seconds = now.getSeconds()
        const secondsDegrees = (seconds / 60) * 360 + 90

        const mins = now.getMinutes()
        const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90

        const hour = now.getHours()
        const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90

        this.setState({
            seconds: secondsDegrees,
            minutes: minsDegrees,
            hour: hourDegrees,
        })
    }
}

export default Clock
