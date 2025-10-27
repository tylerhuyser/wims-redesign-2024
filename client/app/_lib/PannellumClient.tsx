'use client';

import dynamic from "next/dynamic";

export const PanoramaViewer = dynamic(
  async () => {
    const mod = await import('react-pannellum-next');
    return mod.PanoramaViewer;
  },
  { ssr: false }
);