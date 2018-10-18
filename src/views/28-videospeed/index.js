import React, { Component } from 'react'

import './style.css'

class VideoSpeed extends Component {
    state = {
        playbackRate: 1,
        height: '15%',
    }

    handleMove = e => {
        const y = e.pageY - e.currentTarget.offsetTop
        const percent = y / e.currentTarget.offsetHeight
        const min = 0.4
        const max = 4
        const height = Math.round(percent * 100) + '%'
        const playbackRate = (percent * (max - min) + min).toFixed(1)

        this.setState(
            {
                playbackRate,
                height,
            },
            () => (this.refVideo.playbackRate = this.state.playbackRate)
        )
    }

    render() {
        const { height, playbackRate } = this.state
        return (
            <div className="wrapper">
                <video
                    className="flex"
                    width="765"
                    height="430"
                    src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
                    loop
                    controls
                    ref={el => (this.refVideo = el)}
                />
                <div className="speed" onMouseMove={this.handleMove}>
                    <div className="speed-bar" style={{ height: height }}>
                        {playbackRate}×
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoSpeed
