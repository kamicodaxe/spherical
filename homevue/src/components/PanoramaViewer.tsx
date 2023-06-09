'use client';
import 'pannellum';
import React, { useEffect, useRef } from 'react';

interface Hotspot {
    pitch: number;
    yaw: number;
    cssClass: string;
    handleClick: () => void;
}

interface PanoramaViewerProps {
    imagePath: string;
    hotspots?: Hotspot[];
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({ imagePath }) => {
    const viewerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let viewer: pannellum.viewer | null = null;

        // Initializing the Pannellum viewer
        if (viewerRef.current) {
            viewer = pannellum.viewer(viewerRef.current, {
                type: 'equirectangular',
                panorama: imagePath,
                // Add any additional viewer options here
                autoLoad: true,
                autoRotate: -2,
            });
        }

        // Clean up the viewer on component unmount
        return () => {
            if (viewer) {
                viewer.destroy();
            }
        };
    }, [imagePath]);

    const handleFullscreen = () => {
        if (viewerRef.current) {
            if (viewerRef.current.requestFullscreen) {
                viewerRef.current.requestFullscreen();
            }
        }
    };

    return (
        <>
            <div ref={viewerRef}  />
            {/* <button onClick={handleFullscreen} >Go Fullscreen</button> */}
        </>
    );
};

export default PanoramaViewer;
