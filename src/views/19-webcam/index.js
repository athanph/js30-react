import React, { Component } from 'react'

import './style.css'
let video

class Webcam extends Component {
    paintToCanvas = () => {
        const canvas = this.refPhoto
        const ctx = canvas.getContext('2d')
        const width = video.videoWidth
        const height = video.videoHeight
        canvas.width = width
        canvas.height = height

        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height)
            // take the pixels out
            let pixels = ctx.getImageData(0, 0, width, height)
            // mess with them
            // pixels = redEffect(pixels);

            //   pixels = rgbSplit(pixels);
            // ctx.globalAlpha = 0.8;

            // pixels = greenScreen(pixels);
            // put them back
            ctx.putImageData(pixels, 0, 0)
        }, 16)
    }

    takePhoto = () => {
        // played the sound
        const strip = this.refStrip
        const audio = new Audio('http://wesbos.com/demos/photobooth/snap.mp3')
        audio.currentTime = 0
        audio.play()

        // take the data out of the canvas
        const data = this.refPhoto.toDataURL('image/jpeg')
        const link = document.createElement('a')

        link.href = data
        link.setAttribute('download', 'handsome')
        link.innerHTML = `<img src="${data}" alt="Handsome Man" />`

        strip.insertBefore(link, strip.firsChild)
    }

    componentDidMount() {
        this.getVideo()
    }

    render() {
        return (
            <div className="photobooth">
                <div className="controls">
                    <button type="button" onClick={this.takePhoto}>
                        Take Photo
                    </button>
                </div>

                <canvas className="photo" ref={el => (this.refPhoto = el)} />
                <video
                    className="player"
                    ref={el => (this.refVideo = el)}
                    onCanPlay={this.paintToCanvas}
                />
                <div className="strip" ref={el => (this.refStrip = el)} />
            </div>
        )
    }

    getVideo() {
        navigator.getUserMedia =
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia ||
            navigator.oGetUserMedia

        if (navigator.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: false })
                .then(localMediaStream => {
                    // console.log(localMediaStream)
                    video = this.refVideo
                    video.srcObject = localMediaStream
                    video.play()
                })
                .catch(err => {
                    console.error(`OH NO!!!`, err)
                })
        }
    }
}

export default Webcam
