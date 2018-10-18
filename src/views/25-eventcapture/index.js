import React, { Component, Fragment } from 'react'

import './style.css'

class EventCapture extends Component {
    componentDidMount() {
        const divs = document.querySelectorAll('div')
        const button = this.refBtn

        function logText(e) {
            console.log(this.classList.value)
            // e.stopPropagation(); // stop bubbling!
            // console.log(this);
        }

        divs.forEach(div =>
            div.addEventListener('click', logText, {
                capture: false,
                once: true,
            })
        )

        button.addEventListener('click', () => console.log('Click!!!'), {
            once: true,
        })
    }

    render() {
        return (
            <Fragment>
                <div className="one">
                    <div className="two">
                        <div className="three" />
                    </div>
                </div>
                <button ref={el => (this.refBtn = el)}>Button</button>
            </Fragment>
        )
    }
}

export default EventCapture
