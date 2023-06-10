'use client';
import 'pannellum';
import 'pannellum/build/pannellum.css';
import React, { useEffect, useRef } from 'react';

interface PanoramaViewerProps {
    imagePath: string;
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({ imagePath }) => {
    const viewerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let viewer: pannellum.viewer | null = null;

        // Initialize the Pannellum viewer
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

    return <div ref={viewerRef} style={{ width: '100%', height: '100%' }} />;
};

export default PanoramaViewer;
