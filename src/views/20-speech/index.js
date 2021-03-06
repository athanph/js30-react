import React, { Component } from 'react'

import './style.css'

class Speech extends Component {
    componentDidMount() {
        this.getSpeechRecognition()
    }

    render() {
        return (
            <div
                className="words"
                ref={el => (this.refWords = el)}
                contentEditable
            />
        )
    }

    getSpeechRecognition() {
        window.SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition

        const recognition = new SpeechRecognition()
        recognition.interimResults = true
        recognition.lang = 'en-US'

        let p = document.createElement('p')
        const words = this.refWords
        words.appendChild(p)

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')

            const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩')
            p.textContent = poopScript

            if (e.results[0].isFinal) {
                p = document.createElement('p')
                words.appendChild(p)
            }
        })

        recognition.addEventListener('end', recognition.start)

        recognition.start()
    }
}
export default Speech
