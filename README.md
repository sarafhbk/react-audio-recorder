# react-audio-recorder

> This is a simple audio recorder package for react application using the javascript [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).

[![NPM](https://img.shields.io/npm/v/@sarafhbk/react-audio-recorder.svg)](https://www.npmjs.com/package/@sarafhbk/react-audio-recorder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash

npm install --save @sarafhbk/react-audio-recorder

yarn add @sarafhbk/react-audio-recorder

```

## Props

| Property name   | Type   | Default            | Description                           |
| --------------- | ------ | ------------------ | ------------------------------------- |
| status          | string | RECORD_STATUS.IDLE | RECORD_STATUS.(IDLE,RECORDING,PAUSED) |
| audioResult     | string | -                  | Result blob url.                      |
| errorMessage    | string | -                  | Error messages.                       |
| timer           | number | -                  | Record timer (in secs).               |
| startRecording  | method | -                  | Call this method to start recording.  |
| stopRecording   | method | -                  | Call this method to stop recording.   |
| pauseRecording  | method | -                  | Call this method to pause recording.  |
| resumeRecording | method | -                  | Call this method to resume recording. |

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
