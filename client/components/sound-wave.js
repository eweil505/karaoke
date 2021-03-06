import {ReactMic} from 'react-mic';
import React, {Component} from 'react';

export default class SoundWave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            audio: {}
        }
    }
    componentDidMount() {
        this.setState({
            record: true
        })
    }

    stopRecording = (recordedBlob) => {
        console.log('recording stopped')
        this.setState({
            record: false,
            audio: recordedBlob
        })
        console.log('state ', this.state)
        console.dir(recordedBlob)
    }

    onStop(recordedBlob) {
        console.log('recordedBlob is:  ', recordedBlob);
        
    }

    render() {
        return (
            <div id="soundwave-wrapper">
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    strokeColor="#000000"
                    backgroudColor="#FF4081" />
                <button onClick={this.stopRecording} type="button">Stop Soundwave</button>
            </div>
        )
    }
}