import React, { Component, Fragment } from 'react'

import clap from './sounds/clap.wav'
import hihat from './sounds/hihat.wav'
import kick from './sounds/kick.wav'
import openhat from './sounds/openhat.wav'
import boom from './sounds/boom.wav'
import ride from './sounds/ride.wav'
import snare from './sounds/snare.wav'
import tom from './sounds/tom.wav'
import tink from './sounds/tink.wav'

import './style.css'

const keys = [
    { key: 65, letter: 'A', sound: 'clap' },
    { key: 83, letter: 'S', sound: 'hihat' },
    { key: 68, letter: 'D', sound: 'kick' },
    { key: 70, letter: 'F', sound: 'openhat' },
    { key: 71, letter: 'G', sound: 'boom' },
    { key: 72, letter: 'H', sound: 'ride' },
    { key: 74, letter: 'J', sound: 'snare' },
    { key: 75, letter: 'K', sound: 'tom' },
    { key: 76, letter: 'L', sound: 'tink' },
]

class DrumKit extends Component {
    state = {
        playingKey: null,
    }

    handleRemoveTransition = e => {
        if (e.propertyName !== 'transform') return
        this.setState({ playingKey: null })
    }

    handlePlaySound = e => {
        const keyCode = e.keyCode
        const key = this[`refKey${keyCode}`]

        if (!key) return

        this.setState({ playingKey: e.keyCode }, () => {
            const soundFile = key => {
                switch (key) {
                    case '65':
                        return clap
                    case '83':
                        return hihat
                    case '68':
                        return kick
                    case '70':
                        return openhat
                    case '71':
                        return boom
                    case '72':
                        return ride
                    case '74':
                        return snare
                    case '75':
                        return tom
                    case '76':
                        return tink
                    default:
                        return ''
                }
            }
            const audio = new Audio(soundFile(`${keyCode}`))

            audio.currentTime = 0
            audio.play()
        })
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handlePlaySound)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlePlaySound)
    }

    render() {
        return (
            <Fragment>
                <div className="keys">
                    {keys.map(k => {
                        return (
                            <div
                                key={k.key}
                                className={`key ${
                                    this.state.playingKey === k.key
                                        ? 'playing'
                                        : ''
                                }`}
                                ref={el => (this[`refKey${k.key}`] = el)}
                                onTransitionEnd={this.handleRemoveTransition}
                            >
                                <kbd>{k.letter}</kbd>
                                <span className="sound">{k.sound}</span>
                            </div>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}

export default DrumKit
