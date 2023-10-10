

export interface HotspotProps {
    pitch: number;
    yaw: number;
    type: string;
    text?: string;
    URL?: string;
    target?: string;
}

export interface PannellumProps {
    children?: React.ReactNode;
    id?: string;
    width?: string;
    height?: string;
    image: string;
    haov?: number;
    vaov?: number;
    vOffset?: number;
    yaw?: number;
    pitch?: number;
    hfov?: number;
    minHfov?: number;
    maxHfov?: number;
    minPitch?: number;
    maxPitch?: number;
    minYaw?: number;
    maxYaw?: number;
    autoRotate?: number;
    compass?: boolean;
    preview?: string;
    previewTitle?: string;
    previewAuthor?: string;
    author?: string;
    title?: string;
    autoLoad?: boolean;
    orientationOnByDefault?: boolean;
    showZoomCtrl?: boolean;
    doubleClickZoom?: boolean;
    keyboardZoom?: boolean;
    mouseZoom?: boolean;
    draggable?: boolean;
    disableKeyboardCtrl?: boolean;
    showFullscreenCtrl?: boolean;
    showControls?: boolean;
    onLoad?: () => void;
    onScenechange?: () => void;
    onScenechangefadedone?: () => void;
    onError?: () => void;
    onErrorcleared?: () => void;
    onMousedown?: () => void;
    onMouseup?: () => void;
    onTouchstart?: () => void;
    onTouchend?: () => void;
    hotspotDebug?: boolean;
    tooltip?: (hotSpotDiv: HTMLDivElement, args: any) => void;
    tooltipArg?: object;
    handleClick?: (e: React.MouseEvent, args: any) => void;
    handleClickArg?: object;
    cssClass?: string;
    onRender?: () => void;
    // hotspots?: HotspotProps[];
}

export type PannellumImageProps = PannellumProps & { Hotspot: React.FC<any> }