declare module 'react-pannellum-next' {
  import * as React from 'react';

  export interface PannellumProps {
    id?: string;
    width?: string;
    height?: string;
    image: string;
    pitch?: number;
    yaw?: number;
    hfov?: number;
    autoLoad?: boolean;
    showZoomCtrl?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export const Pannellum: React.FC<PannellumProps>;

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
