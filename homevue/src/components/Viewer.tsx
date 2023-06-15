import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { HotspotProps } from 'react-pannellum-next';

const DynamicPanoramaViewer = dynamic(() => import('react-pannellum-next').then(c => c.PanoramaViewer), {
    ssr: false, // Disable server-side rendering for this component
});


export default function Viewer() {
    const [image, setImage] = useState('/images/milan.jpg')
    const [hotSpots, sethotSpots] = useState<HotspotProps[]>([
        {
            pitch: 2.7,
            yaw: 133,
            type: 'info',
            text: 'Alma',
            cssClass: 'custom-hotspot',
            onClick: () => setImage('/images/alma.jpg'),
            // URL: 'scene2', // The target URL or scene ID (used for 'scene' or 'link' type)
            // createTooltipFunc: tooltipCallback, // Custom function to create the hotspot tooltip

        },
        // Add more hotspots here
    ])

    useEffect(() => {
        setTimeout(() => {
            sethotSpots(items => ([
                ...items,
                {
                    pitch: 2.7,
                    yaw: 50,
                    type: 'info',
                    text: 'Milan',
                    cssClass: 'custom-hotspot',
                    onClick: () => setImage('/images/milan.jpg'),
                }
            ]))

        }, 6000)

    }, [])


    return (
        <div className="relative w-screen h-screen">
            <DynamicPanoramaViewer
                autoLoad
                autoRotate={-2}
                imagePath={image}
                hotSpots={hotSpots}
            />
        </div>
    );
}
