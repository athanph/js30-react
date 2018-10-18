import React, { Component, Fragment } from 'react'

import './style.css'

class FollowAlongLinks extends Component {
    state = {
        width: '',
        height: '',
        top: '',
        left: '',
    }

    highlightLink = e => {
        const { width, height, top, left } = e.target.getBoundingClientRect()
        this.setState({
            width: width,
            height: height,
            top: top + window.scrollY,
            left: left + window.scrollX,
        })
    }

    componentDidMount() {
        const triggers = document.querySelectorAll('a')
        triggers.forEach(a =>
            a.addEventListener('mouseenter', this.highlightLink)
        )
    }

    render() {
        const { width, height, top, left } = this.state
        return (
            <Fragment>
                <nav>
                    <ul className="menu">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Order Status</a>
                        </li>
                        <li>
                            <a href="">Tweets</a>
                        </li>
                        <li>
                            <a href="">Read Our History</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                    </ul>
                </nav>

                <div className="wrapper">
                    <p>
                        Lorem ipsum dolor sit amet, <a href="">consectetur</a>{' '}
                        adipisicing elit. Est <a href="">explicabo</a> unde
                        natus necessitatibus esse obcaecati distinctio, aut
                        itaque, qui vitae!
                    </p>
                    <p>
                        Aspernatur sapiente quae sint <a href="">soluta</a>{' '}
                        modi, atque praesentium laborum pariatur earum{' '}
                        <a href="">quaerat</a>
                        cupiditate consequuntur facilis ullam dignissimos,
                        aperiam quam veniam.
                    </p>
                    <p>
                        Cum ipsam quod, incidunt sit ex <a href="">tempore</a>{' '}
                        placeat maxime <a href="">corrupti</a> possimus{' '}
                        <a href="">veritatis</a>
                        ipsum fugit recusandae est doloremque? Hic,{' '}
                        <a href="">quibusdam</a>, nulla.
                    </p>
                    <p>
                        Esse quibusdam, ad, ducimus cupiditate{' '}
                        <a href="">nulla</a>, quae magni odit{' '}
                        <a href="">totam</a> ut consequatur eveniet sunt quam
                        provident sapiente dicta neque quod.
                    </p>
                    <p>
                        Aliquam <a href="">dicta</a> sequi culpa fugiat{' '}
                        <a href="">consequuntur</a> pariatur optio ad minima,
                        maxime <a href="">odio</a>, distinctio magni impedit
                        tempore enim repellendus <a href="">repudiandae</a>{' '}
                        quas!
                    </p>
                </div>

                <span
                    className="highlight"
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        transform: `translate(${left}px, ${top}px)`,
                    }}
                />
            </Fragment>
        )
    }
}

export default FollowAlongLinks
