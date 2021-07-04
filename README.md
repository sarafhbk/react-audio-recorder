# react-audio-recorder

> &#x27;&#x27; Hello

[![NPM](https://img.shields.io/npm/v/react-audio-recorder.svg)](https://www.npmjs.com/package/react-audio-recorder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-audio-recorder
```

## Usage

## Class Version

```tsx
import React, { Component } from 'react'

import { ReactAudioRecorder } from 'react-audio-recorder'
import 'react-audio-recorder/dist/index.css'

class Example extends Component {
  render() {
    return (
      <ReactAudioRecorder
        render={({
          timer,
          stopRecording,
          startRecording,
          resumeRecording,
          pauseRecording,
          audioResult,
          status
        }) => (
          <div className='container'>
            <p>
              Status : <b>{status}</b>
            </p>
            {audioResult ? null : (
              <div className='container'>
                <p className='timer'>
                  {new Date(timer * 1000).toISOString().substr(11, 8)}
                </p>
                <div className='buttons'>
                  <button onClick={startRecording}>Start</button>
                  <button onClick={stopRecording}>Stop</button>
                  <button onClick={pauseRecording}>Pause</button>
                  <button onClick={resumeRecording}>Resume</button>
                </div>
              </div>
            )}
            {audioResult ? <audio controls src={audioResult} /> : null}
          </div>
        )}
      />
    )
  }
}
```

## Hooks Version

```tsx
import React from 'react'

import { useAudioRecorder } from 'react-audio-recorder'
import 'react-audio-recorder/dist/index.css'

function Example() {
  const {
    audioResult,
    timer,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    status
  } = useAudioRecorder()
  return (
    <div className='container'>
      <p>
        Status : <b>{status}</b>
      </p>
      {audioResult ? null : (
        <div className='container'>
          <p className='timer'>
            {new Date(timer * 1000).toISOString().substr(11, 8)}
          </p>
          <div className='buttons'>
            <button onClick={startRecording}>Start</button>
            <button onClick={stopRecording}>Stop</button>
            <button onClick={pauseRecording}>Pause</button>
            <button onClick={resumeRecording}>Resume</button>
          </div>
        </div>
      )}
      {audioResult ? <audio controls src={audioResult} /> : null}
    </div>
  )
}
```

## License

MIT © [sarafhbk](https://github.com/sarafhbk)
