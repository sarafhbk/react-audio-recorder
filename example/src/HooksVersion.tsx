import React from 'react'
import { RECORD_STATUS, useAudioRecorder } from '@sarafhbk/react-audio-recorder'

function HooksVersion() {
  const {
    audioResult,
    timer,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    status,
    errorMessage
  } = useAudioRecorder()
  return (
    <div className='container'>
      <div className='inner-container'>
        <audio controls src={audioResult} />
        <p
          className={`timer ${
            status === RECORD_STATUS.PAUSED ? 'blink-animation' : ''
          }`}
        >
          {new Date(timer * 1000).toISOString().substr(11, 8)}
        </p>
        <p className='status'>{status}</p>
        <p className='error'>{errorMessage}</p>
        <div className='buttons'>
          <button
            className='btn-play'
            onClick={
              status === RECORD_STATUS.RECORDING
                ? pauseRecording
                : resumeRecording
            }
          >
            <i
              className={`fas fa-${
                status === RECORD_STATUS.RECORDING ? 'pause' : 'play'
              }`}
            ></i>
          </button>
          <button className='btn-record' onClick={startRecording}>
            <i className={'fas fa-microphone'}></i>
          </button>
          <button className='btn-stop' onClick={stopRecording}>
            <i className={'fas fa-stop'}></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HooksVersion
