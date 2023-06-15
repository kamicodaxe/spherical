'use client';
import Link from "next/link";
import { useState } from "react";

const IMAGES = [
    {
        id: 0,
        image: '/images/milan.jpg',

    },
    {
        id: 1,
        image: '/images/alma.jpg',

    }
]

const Scene = () => {
    const [images, setImages] = useState([
        '/images/milan.jpg',
        '/images/alma.jpg',
    ])

    const [selectedImage, setSelectedImage] = useState<string[]>([IMAGES[0].image])

    const onImageClick = (imageUri: string) => {
        setSelectedImage([imageUri])
    }

    return (
        <div className="relative w-screen h-screen">

            <div className="flex flex-col justify-center items-center absolute mb-4 top-2 left-0 right-0 pointer-events-none z-50 ">

                <div className="flex justify-center items-center p-2 space-x-4 bg-black bg-opacity-50 pointer-events-auto rounded-lg">
                    <button className="bg-black text-white p-2 px-4  rounded-lg">RDC</button>
                    <button className="bg-black bg-opacity-25 hover:bg-opacity-50 text-white p-2 px-4  rounded-lg">ETAGE</button>
                </div>

                <Link href='/join'>
                    <span className="relative text-white p-2 px-4 mt-2 rounded-lg pointer-events-auto inline-block">
                        Join waiting list.
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute -top-0 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </span>
                </Link>

            </div>

            <div className="flex justify-center items-center absolute space-x-2 mb-4 bottom-0 left-0 right-0 pointer-events-none">
                {
                    IMAGES.map(((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => onImageClick(item.image)}
                            className={`h-20 w-32 relative bg-yellow-600 bg-cover pointer-events-auto border-4`}
                            style={{
                                backgroundImage: `url('${item.image}')`,
                                left: 16 * (index + 1) + 'px',
                                borderColor: selectedImage[0] == item.image ? 'black' : 'transparent'
                            }}
                        />
                    )))
                }
            </div>

            <span className="absolute right-2 bottom-2 text-white">
                Spherical 3d by Loïc KAMI.
            </span>

        </div>
    );
}
export default Scene;