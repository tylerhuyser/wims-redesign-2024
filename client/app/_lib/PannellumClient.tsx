'use client'

import dynamic from 'next/dynamic'

export const PanoramaViewer = dynamic(
  () => import('react-pannellum-next').then(mod => mod.PanoramaViewer),
  { ssr: false }
)
