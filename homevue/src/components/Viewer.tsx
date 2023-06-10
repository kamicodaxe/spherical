import { useEffect, useState } from 'react';
import PanoramaViewer from './PanoramaViewer';


export default function Viewer() {
    const [image, setImage] = useState('/images/alma.jpg')

    useEffect(() => {
        setTimeout(() => setImage('/images/milan.jpg'), 3000)
    }, [])

    return (
        <div className="relative w-screen h-screen bg-fuchsia-200">
            <PanoramaViewer imagePath={image} />
        </div>
    );
}
