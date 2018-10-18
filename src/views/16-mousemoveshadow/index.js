import React, { Component } from 'react'

import './style.css'

class MouseMoveShadow extends Component {
    componentDidMount() {
        const hero = this.refHero
        hero.addEventListener('mousemove', this.shadow)
    }

    render() {
        return (
            <div className="hero" ref={el => (this.refHero = el)}>
                <h1 contentEditable ref={el => (this.refText = el)}>
                    🔥WOAH!
                </h1>
            </div>
        )
    }

    shadow = e => {
        const hero = this.refHero
        const text = this.refText
        const walk = 500 // 500px

        const { offsetWidth: width, offsetHeight: height } = hero
        let { offsetX: x, offsetY: y } = e

        if (e !== e.target) {
            x = x + e.target.offsetLeft
            y = y + e.target.offsetTop
        }

        const xWalk = Math.round((x / width) * walk - walk / 2)
        const yWalk = Math.round((y / height) * walk - walk / 2)

        text.style.textShadow = `
			${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
			${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
			${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
			${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
		`
    }
}

export default MouseMoveShadow
