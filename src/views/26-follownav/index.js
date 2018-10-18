import React, { Component } from 'react'

import './style.css'

const courses = [
    { code: 'RFB', title: 'React For Beginners', link: 'http://www' },
    { code: 'ES6', title: 'ES6', link: 'http://www' },
    { code: 'NODE', title: 'Learn Node', link: 'http://www' },
    { code: 'STPU', title: 'Sublime Text Power User', link: 'http://www' },
    { code: 'WTF', title: 'What The Flexbox?!', link: 'http://www' },
    { code: 'GRID', title: 'CSS Grid', link: 'http://www' },
    { code: 'LRX', title: 'Learn Redux', link: 'http://www' },
    { code: 'CLPU', title: 'Command Line Power User', link: 'http://www' },
    { code: 'MMD', title: 'Mastering Markdown', link: 'http://www' },
]

const links = [
    { name: 'Twitter', link: 'http://www' },
    { name: 'Facebook', link: 'http://www' },
    { name: 'Blog', link: 'http://www' },
    { name: 'Course Catalog', link: 'http://www' },
]

class FollowAlongNav extends Component {
    state = {
        isActive: false,
        coords: {
            width: '',
            height: '',
            top: '',
            left: '',
        },
    }

    handleEnter = e => {
        e.persist()
        const target = e.target
        target.classList.add('trigger-enter')

        const targetDropdown = e.currentTarget.children[1]
        const dropdownCoords = targetDropdown.getBoundingClientRect()
        const navCoords = this.nav.getBoundingClientRect()

        this.setState(
            {
                coords: {
                    width: dropdownCoords.width,
                    height: dropdownCoords.height,
                    top: dropdownCoords.top - navCoords.top,
                    left: dropdownCoords.left - navCoords.left,
                },
            },
            () => {
                setTimeout(() => {
                    this.setState({ isActive: true })
                    e.target.classList.add('trigger-enter-active')
                }, 150)
            }
        )
    }

    handleLeave = e => {
        e.persist()
        this.setState({ isActive: false }, () => {
            e.target.classList.remove('trigger-enter', 'trigger-enter-active')
        })
    }

    render() {
        const {
            coords: { width, height, top, left },
            isActive,
        } = this.state

        return (
            <nav className="top" ref={el => (this.nav = el)}>
                <div
                    className={`dropdownBackground ${isActive ? 'open' : ''}`}
                    ref={el => (this.background = el)}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        transform: `translate(${left}px, ${top}px)`,
                    }}
                >
                    <span className="arrow" />
                </div>

                <ul className="cool">
                    <li
                        onMouseEnter={this.handleEnter}
                        onMouseLeave={this.handleLeave}
                    >
                        <a href="#">About Me</a>
                        <div className="dropdown dropdown1">
                            <div className="bio">
                                <img src="https://logo.clearbit.com/wesbos.com" />
                                <p>
                                    Wes Bos sure does love web development. He
                                    teaches things like JavaScript, CSS and BBQ.
                                    Wait. BBQ isn't part of web development. It
                                    should be though!
                                </p>
                            </div>
                        </div>
                    </li>
                    <li
                        onMouseEnter={this.handleEnter}
                        onMouseLeave={this.handleLeave}
                    >
                        <a href="#">Courses</a>
                        <ul className="dropdown courses">
                            {courses.map((c, i) => {
                                return (
                                    <li key={i}>
                                        <span className="code">{c.code}</span>
                                        <a href={c.link}>{c.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                    <li
                        onMouseEnter={this.handleEnter}
                        onMouseLeave={this.handleLeave}
                    >
                        <a href="#">Other Links</a>
                        <ul className="dropdown dropdown3">
                            {links.map((l, i) => {
                                return (
                                    <li key={i}>
                                        <a className="button" href={l.link}>
                                            {l.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default FollowAlongNav
