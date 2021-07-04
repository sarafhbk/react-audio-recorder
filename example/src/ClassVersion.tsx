import React from 'react'
import { ReactAudioRecorder } from '@sarafhbk/react-audio-recorder'

function ClassVersion() {
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

export default ClassVersion
