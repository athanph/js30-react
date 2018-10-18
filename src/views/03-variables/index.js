import React, { Component, Fragment } from 'react'

import './style.css'

class Variables extends Component {
    state = {
        filter: {
            base: '#ffc600',
            blur: '10',
            spacing: '10',
        },
    }

    handleUpdate = e => {
        const { name, value } = e.target
        this.setState({ filter: { ...this.state.filter, [name]: value } }, () =>
            this.updateProperty(name)
        )
    }

    updateProperty(property) {
        const suffix = property === 'spacing' || property === 'blur' ? 'px' : ''

        // Set new style variables
        document.documentElement.style.setProperty(
            `--${property}`,
            this.state.filter[property] + suffix
        )
    }

    render() {
        const { base, blur, spacing } = this.state.filter

        return (
            <Fragment>
                <h2>
                    Update CSS Variables with <span className="hl">JS</span>
                </h2>

                <div className="controls">
                    <label htmlFor="spacing">Spacing:</label>
                    <input
                        id="spacing"
                        type="range"
                        name="spacing"
                        min="10"
                        max="200"
                        value={spacing}
                        onChange={this.handleUpdate}
                    />

                    <label htmlFor="blur">Blur:</label>
                    <input
                        id="blur"
                        type="range"
                        name="blur"
                        min="0"
                        max="25"
                        value={blur}
                        onChange={this.handleUpdate}
                    />

                    <label htmlFor="base">Base Color</label>
                    <input
                        id="base"
                        type="color"
                        name="base"
                        value={base}
                        onChange={this.handleUpdate}
                    />
                </div>

                <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
            </Fragment>
        )
    }
}

export default Variables
