import { ReactElement } from 'react'
import { useAudioRecorder } from './useAudioRecorder'

export const ReactAudioRecorder = ({
  render
}: {
  render: ({
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    status,
    audioResult,
    errorMessage,
    timer
  }: {
    startRecording: () => void
    stopRecording: () => void
    pauseRecording: () => void
    resumeRecording: () => void
    status: string
    audioResult: string
    errorMessage: string
    timer: number
  }) => ReactElement
}) => {
  const {
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    status,
    audioResult,
    errorMessage,
    timer
  } = useAudioRecorder()

  return render({
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    status,
    audioResult,
    errorMessage,
    timer
  })
}
