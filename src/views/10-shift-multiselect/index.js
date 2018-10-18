import React, { Component } from 'react'

import './style.css'

const data = [
    'This is an inbox layout.',
    'Check one item',
    'Hold down your Shift key',
    'Check a lower item',
    'Everything inbetween should also be set to checked',
    'Try do it without any libraries',
    'Just regular JavaScript',
    'Good Luck!',
    "Don't forget to tweet your result!",
]
let lastChecked

class ShiftMultiSelect extends Component {
    handleCheck = e => {
        const checkboxes = document.querySelectorAll(
            '.inbox input[type="checkbox"]'
        )
        let inBetween = false

        if (e.shiftKey && e.target.checked) {
            checkboxes.forEach(checkbox => {
                if (checkbox === e.target || checkbox === lastChecked)
                    inBetween = !inBetween
                if (inBetween) checkbox.checked = true
            })
        }

        lastChecked = e.target
    }

    render() {
        return (
            <div className="inbox">
                {data.map((d, i) => {
                    return (
                        <div key={i} className="item">
                            <input type="checkbox" onClick={this.handleCheck} />
                            <p>{d}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ShiftMultiSelect
