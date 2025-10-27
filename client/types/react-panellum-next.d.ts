declare module 'react-pannellum-next' {
  import * as React from 'react';

  export interface PanoramaViewerProps {
    id?: string;
    width?: string;
    height?: string;
    imagePath: string;
    pitch?: number;
    yaw?: number;
    hfov?: number;
    autoLoad?: boolean;
    showZoomCtrl?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export const PanoramaViewer: React.FC<PanoramaViewer>;

  export interface HotspotProps {
    pitch: number;
    yaw: number;
    type: 'info' | 'custom' | string;
    text?: string;
    URL?: string;
    cssClass?: string;
    [key: string]: any;
  }

  export const Hotspot: React.FC<HotspotProps>;
}
