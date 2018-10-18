import React, { Component } from 'react'

import './style.css'
import VideoSrc from './652333414.mp4'

let video

class VideoPlayer extends Component {
    state = {
        isPlaying: false,
        mousedown: false,
        volume: '1',
        playbackRate: '1',
        percent: '',
    }

    togglePlay = () => {
        const method = video.paused ? 'play' : 'pause'
        video[method]()
        this.setState({ isPlaying: !video.paused && true })
    }

    skip = e => (video.currentTime += parseFloat(e.target.dataset.skip))

    handleRangeUpdate = e => {
        const { name, value } = e.target
        this.setState({ [name]: value }, () => (video[name] = value))
    }

    handleProgress = e => {
        const { currentTime, duration } = e.target
        const percent = (currentTime / duration) * 100
        this.setState({ percent })
    }

    scrub = e => {
        const progress = this.refProgress
        const scrubTime =
            (e.nativeEvent.offsetX / progress.offsetWidth) * video.duration

        video.currentTime = scrubTime
    }

    componentDidMount() {
        video = this.refVideo
    }

    render() {
        const {
            playbackRate,
            volume,
            mousedown,
            isPlaying,
            percent,
        } = this.state

        return (
            <div className="player" ref="player">
                <video
                    className="player__video viewer"
                    src={VideoSrc}
                    onClick={this.togglePlay}
                    onTimeUpdate={this.handleProgress}
                    ref={el => (this.refVideo = el)}
                />

                <div className="player__controls">
                    <div
                        className="progress"
                        onClick={this.scrub}
                        onMouseMove={() => mousedown && this.scrub}
                        onMouseDown={() => this.setState({ mousedown: true })}
                        onMouseUp={() => this.setState({ mousedown: false })}
                        ref={el => (this.refProgress = el)}
                    >
                        <div
                            className="progress__filled"
                            style={{ flexBasis: `${percent}%` }}
                        />
                    </div>

                    <button
                        className="player__button toggle"
                        title="Toggle Play"
                        onClick={this.togglePlay}
                    >
                        {!isPlaying ? '►' : '❚ ❚'}
                    </button>

                    <input
                        type="range"
                        name="volume"
                        className="player__slider"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={this.handleRangeUpdate}
                    />
                    <input
                        type="range"
                        name="playbackRate"
                        className="player__slider"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={playbackRate}
                        onChange={this.handleRangeUpdate}
                    />

                    <button
                        data-skip="-10"
                        className="player__button"
                        onClick={this.skip}
                    >
                        « 10s
                    </button>
                    <button
                        data-skip="25"
                        className="player__button"
                        onClick={this.skip}
                    >
                        25s »
                    </button>
                </div>
            </div>
        )
    }
}

export default VideoPlayer
