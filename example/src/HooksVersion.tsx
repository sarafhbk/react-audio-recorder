import React from 'react'
import { useAudioRecorder } from '@sarafhbk/react-audio-recorder'

function HooksVersion() {
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

export default HooksVersion
