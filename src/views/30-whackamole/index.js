import React, { Component, Fragment } from 'react'

import './style.css'

class WhackAMole extends Component {
    state = {
        score: 0,
        lastHole: 0,
        timeUp: false,
        holes: 6,
    }

    randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    randomHole() {
        const { holes, lastHole } = this.state
        const idx = Math.floor(Math.random() * holes)

        if (idx === lastHole) {
            console.log('Ah nah thats the same one bud')
            return this.randomHole()
        }

        this.setState({ lastHole: idx })

        return idx
    }

    peep() {
        const time = this.randomTime(200, 1000)
        const hole = this.randomHole()

        this[`refHole${hole}`].classList.add('up')

        setTimeout(() => {
            this[`refHole${hole}`].classList.remove('up')
            if (!this.state.timeUp) this.peep()
        }, time)
    }

    startGame = () => {
        this.setState(
            {
                timeUp: false,
                score: 0,
            },
            () => {
                this.peep()
                setTimeout(() => this.setState({ timeUp: true }), 10000)
            }
        )
    }

    bonk = e => {
        e.persist()
        if (!e.isTrusted) return // cheater!

        // score++
        this.setState({ score: this.state.score + 1 }, () => {
            e.target.parentNode.classList.remove('up')
        })
    }

    render() {
        return (
            <Fragment>
                <h1>
                    Whack-a-mole!{' '}
                    <span className="score">{this.state.score}</span>
                </h1>

                <button onClick={this.startGame}>Start!</button>

                <div className="game">
                    {Array.from(Array(6).keys()).map(i => {
                        const hole = `refHole${i}`
                        return (
                            <div
                                key={i}
                                className={`hole ${hole}`}
                                ref={el => (this[hole] = el)}
                            >
                                <div className="mole" onClick={this.bonk} />
                            </div>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}

export default WhackAMole
