'use client'

import MuxPlayer from '@mux/mux-player-react'

type MuxVideoProps = {
  playbackId: string
  poster?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  accentColor?: string
}

export default function MuxVideo({
  playbackId,
  poster,
  autoPlay = false,
  loop = false,
  muted = true,
  accentColor
}: MuxVideoProps) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      streamType="on-demand"
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      poster={poster}
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '1rem',
      }}
      accentColor={accentColor}
    />
  )
}
