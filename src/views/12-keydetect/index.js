import React, { Component } from 'react'

const secretCode = 'qqqqq'

class KeyDetect extends Component {
    state = {
        pressed: [],
        yehey: false,
    }

    componentDidMount() {
        window.addEventListener('keyup', this.onKeyUp)
    }

    render() {
        return (
            <div>
                Type 5 Q's
                {this.state.yehey && <h1>YEHEY!</h1>}
            </div>
        )
    }

    onKeyUp = e => {
        const { pressed } = this.state

        this.setState({ ...pressed.push(e.key) }, () => {
            pressed.splice(
                -secretCode.length - 1,
                pressed.length - secretCode.length
            )
            if (pressed.join('').includes(secretCode)) {
                console.log('DING DING!')
                this.setState({ yehey: true })
            } else {
                this.setState({ yehey: false })
            }
        })
    }
}

export default KeyDetect
