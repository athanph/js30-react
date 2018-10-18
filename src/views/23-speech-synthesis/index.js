import React, { Component } from 'react'

import './style.css'

let msg

class SpeechSynthesis extends Component {
    state = {
        voices: [],
        selectedVoice: '',
        rate: '1',
        pitch: '0',
        text: 'Hello! I love JavaScript 👍',
    }

    handleSetOption = e => {
        e.persist()
        this.setState({ [e.target.name]: e.target.value }, () => {
            msg[e.target.name] = e.target.value
            this.handleSpeak()
        })
    }

    handleSetVoice = e => {
        e.persist()
        this.setState({ selectedVoice: e.target.value }, () => {
            msg.voice = this.state.voices.find(
                voice => voice.name === e.target.value
            )
            this.handleSpeak()
        })
    }

    handleSpeak = () => {
        this.handleStop()
        window.speechSynthesis.speak(msg)
    }

    handleStop() {
        window.speechSynthesis.cancel()
    }

    componentDidMount() {
        msg = new SpeechSynthesisUtterance()
        window.speechSynthesis.addEventListener('voiceschanged', e => {
            this.setState(
                {
                    voices: e.target.getVoices(),
                    selectedVoice: e.target.getVoices()[0].name,
                },
                () => (msg.text = this.state.text)
            )
        })
    }

    render() {
        const { voices, selectedVoice, pitch, rate, text } = this.state

        return (
            <div className="voiceinator">
                <h1>The Voiceinator 5000</h1>

                <select
                    name="voice"
                    id="voices"
                    value={selectedVoice}
                    onChange={this.handleSetVoice}
                >
                    <option value="">Select A Voice</option>
                    {voices.map(v => (
                        <option key={v.name} value={v.name}>
                            {v.name} {v.lang}
                        </option>
                    ))}
                </select>

                <label htmlFor="rate">Rate:</label>
                <input
                    name="rate"
                    type="range"
                    min="0"
                    max="3"
                    value={rate}
                    step="0.1"
                    onChange={this.handleSetOption}
                />

                <label htmlFor="pitch">Pitch:</label>
                <input
                    name="pitch"
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={pitch}
                    onChange={this.handleSetOption}
                />

                <textarea
                    name="text"
                    defaultValue={text}
                    onChange={this.handleSetOption}
                />

                <button id="stop" onClick={this.handleStop}>
                    Stop!
                </button>
                <button id="speak" onClick={this.handleSpeak}>
                    Speak
                </button>
            </div>
        )
    }
}

export default SpeechSynthesis
