'use client';
import dynamic from "next/dynamic";
import { useEffect } from "react";
// @ts-ignore
const ReactPannellum = dynamic(() => import('react-pannellum'))
// @ts-ignore
const { getConfig } = ReactPannellum

type Props = {
    imageSrc: string
}

const PannellumImage = ({ imageSrc }: Props) => {

    useEffect(() => {
        console.warn(ReactPannellum)
        console.warn(getConfig)
    }, [])

    const handleClick = () => {
        console.log('Hi')
    }

    return (
        <ReactPannellum
            // @ts-ignore
            id={'scene-id'}
            sceneId="scene-default"
            imageSource={imageSrc}
            style={{
                width: "100%",
                height: "100%",
                background: "#000000"
            }}
            pitch={10}
            yaw={180}
            hfov={110}
            config={{
                // hotSpotDebug: true,
                autoLoad: true,
                // compass: true,
                hotSpots: [
                    {
                        yaw: 132.673,
                        pitch: 1.820,
                        text: 'Kitchen',
                        type: 'scene',
                        image: '/images/alma.jpg',
                        sceneId: 'scene-default'
                    }
                ]
            }}
            onPanoramaLoaded={() => {
                console.log("panorama loaded");
            }}


        />
    );
}
export default PannellumImage;