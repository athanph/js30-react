import React, { Component } from 'react'

import './style.css'

const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

class TypeAhead extends Component {
    state = {
        cities: [],
    }

    findMatches = (wordToMatch, cities) => {
        return cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi')
            return place.city.match(regex) || place.state.match(regex)
        })
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    displayMatches = e => {
        const { value } = e.target

        if (value.length !== 0) {
            const matchArray = this.findMatches(value, this.state.cities)
            const html = matchArray
                .map(place => {
                    const regex = new RegExp(value, 'gi')
                    const cityName = place.city.replace(
                        regex,
                        `<span class="hl">${value}</span>`
                    )
                    const stateName = place.state.replace(
                        regex,
                        `<span class="hl">${value}</span>`
                    )
                    return `
					<li>
						<span class="name">${cityName}, ${stateName}</span>
						<span class="population">${this.numberWithCommas(place.population)}</span>
					</li>
				`
                })
                .join('')
            this.refList.innerHTML = html
        } else {
            this.refList.innerHTML = `<li>Filter for a city</li>
					<li>or a state</li>`
        }
    }

    componentDidMount() {
        fetch(endpoint)
            .then(blob => blob.json())
            .then(data => this.setState({ cities: [...data] }))
    }

    render() {
        return (
            <form className="search-form">
                <input
                    type="text"
                    className="search"
                    placeholder="City or State"
                    onChange={this.displayMatches}
                />
                <ul className="suggestions" ref={el => (this.refList = el)}>
                    <li>Filter for a city</li>
                    <li>or a state</li>
                </ul>
            </form>
        )
    }
}

export default TypeAhead
