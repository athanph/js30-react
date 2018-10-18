import React, { Component } from 'react'

import './style.css'

const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
]

class Sort extends Component {
    state = {
        bands: [],
    }

    strip = bandName => bandName.replace(/^(a |the |an )/i, '').trim()

    sort = () => bands.sort((a, b) => (this.strip(a) > this.strip(b) ? 1 : -1))

    componentDidMount() {
        this.setState({ bands: this.sort() })
    }

    render() {
        return (
            <ul id="bands">
                {this.state.bands.map(band => (
                    <li key={band}>{band}</li>
                ))}
            </ul>
        )
    }
}

export default Sort
