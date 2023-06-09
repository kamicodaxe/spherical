import React, { useEffect, useRef } from "react";
import { Hotspot } from "./HotSpot";
import "./pannellum/css/pannellum.css";
import "./pannellum/css/style-textInfo.css";
import "./pannellum/js/libpannellum.js";
import "./pannellum/js/pannellum.js";
import "./pannellum/js/RequestAnimationFrame";

import { HotspotProps, PannellumProps } from './types';

declare global {
    interface Window {
        pannellum: any;
    }
}

function defaultEventHandler() {
    console.log('define handler')
}

const PannellumImage: React.FC<PannellumProps> & { Hotspot?: React.FC<HotspotProps> } = ({
    id,
    width,
    height,
    image,
    haov,
    vaov,
    vOffset,
    yaw,
    pitch,
    hfov,
    minHfov,
    maxHfov,
    minPitch,
    maxPitch,
    minYaw,
    maxYaw,
    autoRotate,
    compass,
    preview,
    previewTitle,
    previewAuthor,
    author,
    title,
    autoLoad,
    orientationOnByDefault,
    showZoomCtrl,
    doubleClickZoom,
    keyboardZoom,
    mouseZoom,
    draggable,
    disableKeyboardCtrl,
    showFullscreenCtrl,
    showControls,
    onLoad,
    onScenechange,
    onScenechangefadedone,
    onError,
    onErrorcleared,
    onMousedown,
    onMouseup,
    onTouchstart,
    onTouchend,
    hotspotDebug,
    tooltip,
    tooltipArg,
    handleClick,
    handleClickArg,
    cssClass,
    onRender,
    children
}) => {
    const imageNodeRef = useRef<HTMLDivElement>(null);
    const viewerRef = useRef<any>(null);

    const renderImage = () => {
        const childrenArray = React.Children.toArray(children);

        const hotspots = childrenArray.filter(
            (child) => React.isValidElement(child) && child.type instanceof Hotspot
        );

        const hotspotArray = hotspots.map((hotspot: React.ReactElement) => {
            const { type, ...rest } = hotspot.props;
            return { id: Math.random().toString(36).substr(2, 9), type, ...rest };
        });

        const jsonConfig = {
            type: "equirectangular",
            image,
            haov,
            vaov,
            vOffset,
            yaw,
            pitch,
            hfov,
            minHfov,
            maxHfov,
            minPitch,
            maxPitch,
            minYaw,
            maxYaw,
            autoRotate,
            compass,
            preview,
            previewTitle,
            previewAuthor,
            author,
            title,
            autoLoad,
            orientationOnByDefault,
            showZoomCtrl,
            doubleClickZoom,
            keyboardZoom,
            mouseZoom,
            draggable,
            disableKeyboardCtrl,
            showFullscreenCtrl,
            showControls,
            hotSpotDebug: hotspotDebug,
            hotSpots: hotspotArray,
            onRender,
        };

        Object.keys(jsonConfig).forEach(
            (key) => jsonConfig[key] === undefined && delete jsonConfig[key]
        );

        if (viewerRef.current) {
            viewerRef.current.destroy();
        }

        viewerRef.current = pannellum.viewer(
            id || "",
            jsonConfig,
        );

        onLoad && viewerRef.current.on("load", onLoad);
        onScenechange && viewerRef.current.on("scenechange", onScenechange);
        onScenechangefadedone && viewerRef.current.on("scenechangefadedone", onScenechangefadedone);
        onError && viewerRef.current.on("error", onError);
        onErrorcleared && viewerRef.current.on("errorcleared", onErrorcleared);
        onMousedown && viewerRef.current.on("mousedown", onMousedown);
        onMouseup && viewerRef.current.on("mouseup", onMouseup);
        onTouchstart && viewerRef.current.on("touchstart", onTouchstart);
        onTouchend && viewerRef.current.on("touchend", onTouchend);
    };

    useEffect(() => {
        renderImage();
    }, []);

    useEffect(() => {
        renderImage();
    }, [
        image,
        width,
        height,
        compass,
        title,
        author,
        preview,
        previewTitle,
        previewAuthor,
        showZoomCtrl,
        showFullscreenCtrl,
        showControls,
        children,
    ]);

    useEffect(() => {
        if (
            minYaw !== maxYaw ||
            minPitch !== maxPitch ||
            minHfov !== maxHfov
        ) {
            viewerRef.current.setYawBounds([minYaw, maxYaw]);
            viewerRef.current.setPitchBounds([minPitch, maxPitch]);
            viewerRef.current.setHfovBounds([minHfov, maxHfov]);
        }
        if (yaw !== undefined) {
            viewerRef.current.setYaw(yaw);
        }
        if (pitch !== undefined) {
            viewerRef.current.setPitch(pitch);
        }
        if (hfov !== undefined) {
            viewerRef.current.setHfov(hfov);
        }
    }, [minYaw, maxYaw, minPitch, maxPitch, minHfov, maxHfov, yaw, pitch, hfov]);

    const handleClickHotspot = (e: React.MouseEvent, args: any) => {
        console.log("hotspot clicked", args.name);
    };

    const hotspotTooltip = (hotSpotDiv: HTMLDivElement, args: any) => {
        hotSpotDiv.setAttribute("id", "textInfo");
        const hDiv = document.createElement("div");
        hDiv.classList.add("hotspot");
        const outDiv = document.createElement("div");
        outDiv.classList.add("out");
        const inDiv = document.createElement("div");
        inDiv.classList.add("in");
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
        hotSpotDiv.appendChild(hDiv);
        hDiv.appendChild(inDiv);
        hDiv.appendChild(outDiv);
    };

    const getViewer = () => {
        return viewerRef.current;
    };

    const forceRender = () => {
        renderImage();
    };

    const divStyle = {
        width: width || "100%",
        height: height || "400px",
    };

    return (
        <div
            id={id || ""}
            style={divStyle}
            ref={imageNodeRef}
        />
    );
};

PannellumImage.Hotspot = Hotspot;

export default PannellumImage;
