'use client';
import dynamic from "next/dynamic";
import React from "react";

const ReactPannellum = dynamic(() => import('react-pannellum'))

const { getConfig } = ReactPannellum

export default class Scene extends React.Component {
    click() {
        console.log(getConfig());
    }

    render() {
        const config = {
            autoRotate: -2,
        };
        return (
            <div>
                <ReactPannellum
                    id="1"
                    sceneId="firstScene"
                    imageSource="https://pannellum.org/images/alma.jpg"
                    config={config}
                />
                <div onClick={this.click}>Click me</div>
            </div>
        );
    }
}