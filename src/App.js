import React, { Component } from 'react'
import LazyLoadable from './Loadable'
import { Switch, Route, Link } from 'react-router-dom'

const DrumKit = LazyLoadable({ loader: () => import('./views/01-drumkit') })
const Clock = LazyLoadable({
    loader: () => import('./views/02-clock'),
})
const Variables = LazyLoadable({ loader: () => import('./views/03-variables') })
const Array1 = LazyLoadable({ loader: () => import('./views/04-array1') })
const FlexGallery = LazyLoadable({
    loader: () => import('./views/05-flexgallery'),
})
const TypeAhead = LazyLoadable({ loader: () => import('./views/06-typeahead') })
const Array2 = LazyLoadable({ loader: () => import('./views/07-array2') })
const Canvas = LazyLoadable({ loader: () => import('./views/08-canvas') })
const DevTools = LazyLoadable({ loader: () => import('./views/09-devtools') })
const ShiftMultiSelect = LazyLoadable({
    loader: () => import('./views/10-shift-multiselect'),
})
const VideoPlayer = LazyLoadable({
    loader: () => import('./views/11-videoplayer'),
})
const KeyDetect = LazyLoadable({ loader: () => import('./views/12-keydetect') })
const SlideScroll = LazyLoadable({
    loader: () => import('./views/13-slidescroll'),
})
const ObjectArray = LazyLoadable({
    loader: () => import('./views/14-objectarray'),
})
const LocalStorage = LazyLoadable({
    loader: () => import('./views/15-localstorage'),
})
const MouseMoveShadow = LazyLoadable({
    loader: () => import('./views/16-mousemoveshadow'),
})
const Sort = LazyLoadable({ loader: () => import('./views/17-sort') })
const TotalTime = LazyLoadable({ loader: () => import('./views/18-totaltime') })
const Webcam = LazyLoadable({ loader: () => import('./views/19-webcam') })
const Speech = LazyLoadable({ loader: () => import('./views/20-speech') })
const Geolocation = LazyLoadable({
    loader: () => import('./views/21-geolocation'),
})
const FollowAlongLinks = LazyLoadable({
    loader: () => import('./views/22-followlink'),
})
const SpeechSynthesis = LazyLoadable({
    loader: () => import('./views/23-speech-synthesis'),
})
const FixedNav = LazyLoadable({
    loader: () => import('./views/24-fixednav'),
})
const EventCapture = LazyLoadable({
    loader: () => import('./views/25-eventcapture'),
})
const FollowAlongNav = LazyLoadable({
    loader: () => import('./views/26-follownav'),
})
const ClickDrag = LazyLoadable({
    loader: () => import('./views/27-clickdrag'),
})
const VideoSpeed = LazyLoadable({
    loader: () => import('./views/28-videospeed'),
})
const Countdown = LazyLoadable({
    loader: () => import('./views/29-countdown'),
})
const WhackAMole = LazyLoadable({
    loader: () => import('./views/30-whackamole'),
})

const Nav = [
    'DrumKit',
    'Clock',
    'Variables',
    'Array1',
    'FlexGallery',
    'TypeAhead',
    'Array2',
    'Canvas',
    'DevTools',
    'ShiftMultiSelect',
    'VideoPlayer',
    'KeyDetect',
    'SlideScroll',
    'ObjectArray',
    'LocalStorage',
    'MouseMoveShadow',
    'Sort',
    'TotalTime',
    'Webcam',
    'Speech',
    'Geolocation',
    'FollowAlongLinks',
    'SpeechSynthesis',
    'FixedNav',
    'EventCapture',
    'FollowAlongNav',
    'ClickDrag',
    'VideoSpeed',
    'Countdown',
    'WhackAMole',
]

class App extends Component {
    render() {
        return (
            <div className="container">
                {/* <div className="sidebar">
                    <ul style={{ listStyle: 'none' }} className="nav">
                        {Nav.map((n, i) => (
                            <li key={i}>
                                <Link to={`/${i + 1}`}>
                                    {i + 1} - {n}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div> */}
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={DrumKit} />
                        <Route path="/1" component={DrumKit} />
                        <Route path="/2" component={Clock} />
                        <Route path="/3" component={Variables} />
                        <Route path="/4" component={Array1} />
                        <Route path="/5" component={FlexGallery} />
                        <Route path="/6" component={TypeAhead} />
                        <Route path="/7" component={Array2} />
                        <Route path="/8" component={Canvas} />
                        <Route path="/9" component={DevTools} />
                        <Route path="/10" component={ShiftMultiSelect} />
                        <Route path="/11" component={VideoPlayer} />
                        <Route path="/12" component={KeyDetect} />
                        <Route path="/13" component={SlideScroll} />
                        <Route path="/14" component={ObjectArray} />
                        <Route path="/15" component={LocalStorage} />
                        <Route path="/16" component={MouseMoveShadow} />
                        <Route path="/17" component={Sort} />
                        <Route path="/18" component={TotalTime} />
                        <Route path="/19" component={Webcam} />
                        <Route path="/20" component={Speech} />
                        <Route path="/21" component={Geolocation} />
                        <Route path="/22" component={FollowAlongLinks} />
                        <Route path="/23" component={SpeechSynthesis} />
                        <Route path="/24" component={FixedNav} />
                        <Route path="/25" component={EventCapture} />
                        <Route path="/26" component={FollowAlongNav} />
                        <Route path="/27" component={ClickDrag} />
                        <Route path="/28" component={VideoSpeed} />
                        <Route path="/29" component={Countdown} />
                        <Route path="/30" component={WhackAMole} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
