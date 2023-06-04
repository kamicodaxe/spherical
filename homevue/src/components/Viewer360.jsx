import { Pannellum } from "pannellum-react";
import { useState } from "react";
import alma from "../assets/images/alma.jpg";
import milan from "../assets/images/milan.jpg";


export default function Viewer360() {
    const Scenes = {
        alma: {
            title: "View-1",
            image: alma,
            pitch: -11,
            yaw: -3,
            hotSpot: {
                nexScene: {
                    type: "custom",
                    pitch: -8,
                    yaw: 12,
                    cssClass: "moveScene",
                    scene: "image2"
                }
            }
        },
        milan: {
            title: "View-2",
            image: milan,
            pitch: 10,
            yaw: 180,
            hotSpot: {
                scene: "image1"
            }
        },

    };

    const [scene, setScene] = useState(Scenes.image1);

    return (
        <div>
            <Pannellum
                width={"100%"}
                height={"100vh"}
                title={scene.title}
                image={scene.image}
                pitch={0.28}
                yaw={0}
                hfov={130}
                autoLoad
                showControls={false}
                showFullscreenCtrl={false}
                showZoomCtrl={false}
                orientationOnByDefault={true}
            >
                <Pannellum.Hotspot
                    type="custom"
                    pitch={15}
                    yaw={100}
                    name="image1"
                    handleClick={(evt, name) => setScene(Scenes.alma)}
                />

                <Pannellum.Hotspot
                    type="custom"
                    pitch={15}
                    yaw={-1}
                    name="image2"
                    handleClick={(evt, name) => setScene(Scenes.milan)}
                />

            </Pannellum>
        </div>
    );
}
