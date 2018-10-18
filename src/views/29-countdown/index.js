import React, { Component } from 'react'

import './style.css'

let countdown
const timers = [
    { duration: 20, name: '20 secs' },
    { duration: 300, name: 'Work 5' },
    { duration: 900, name: 'Quick 15' },
    { duration: 1200, name: 'Snack 20' },
    { duration: 3600, name: 'Lunch Break' },
]

class Countdown extends Component {
    state = {
        isCounting: false,
        minutes: '0',
        seconds: '00',
        endTime: {
            hour: '0',
            minute: '0',
        },
    }

    setTimer = e => {
        const seconds = parseInt(e.target.dataset.time)
        this.startTimer(seconds)
    }

    inputTimer = e => {
        e.preventDefault()
        const minutes = parseInt(this.refInput.value)
        this.startTimer(minutes * 60)
        e.target.reset()
    }

    startTimer = seconds => {
        clearInterval(countdown)

        const now = Date.now()
        const then = now + seconds * 1000

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000)
            const seconds = secondsLeft % 60

            // check if we should stop it!
            if (secondsLeft < 0) {
                this.setState({ isCounting: false })
                clearInterval(countdown)
                return
            }

            // display it
            this.setState(
                {
                    isCounting: true,
                    minutes: Math.floor(secondsLeft / 60),
                    seconds: this.formatMinSec(seconds),
                },
                () => {
                    document.title = `
						${this.state.minutes}:${this.state.seconds}
					`
                    this.setEndTime(then)
                }
            )
        }, 1000)
    }

    setEndTime(timestamp) {
        const end = new Date(timestamp)
        const hour = end.getHours()
        const mins = end.getMinutes()
        this.setState({
            endTime: {
                hour: this.formatHour(hour),
                minute: this.formatMinSec(mins),
            },
        })
    }

    formatHour = hour => (hour > 12 ? hour - 12 : hour)
    formatMinSec = time => Number((time < 10 ? '0' : '') + time)

    render() {
        const { minutes, seconds, endTime } = this.state

        return (
            <div className="timer">
                <div className="timer__controls">
                    {timers.map(t => (
                        <button
                            key={t.duration}
                            data-time={t.duration}
                            className="timer__button"
                            onClick={this.setTimer}
                        >
                            {t.name}
                        </button>
                    ))}
                    <form
                        name="customForm"
                        id="custom"
                        onSubmit={this.inputTimer}
                    >
                        <input
                            type="text"
                            name="minutes"
                            placeholder="Enter Minutes"
                            ref={el => (this.refInput = el)}
                        />
                    </form>
                </div>
                <div className="display">
                    <h1 className="display__time-left">
                        {`${minutes}:${seconds}`}
                    </h1>
                    <p className="display__end-time">
                        {this.state.isCounting
                            ? `Be Back At ${endTime.hour}:${endTime.minute}`
                            : "Time's up"}
                    </p>
                </div>
            </div>
        )
    }
}

export default Countdown
