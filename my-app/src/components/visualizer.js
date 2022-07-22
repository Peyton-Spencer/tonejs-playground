import React from "react"
import butterchurn from "butterchurn"
import butterchurnPresets from "butterchurn-presets"

export default class Visualizer extends React.Component {
    state = {
        visualizer: null,
        audioContext: null,
        canvas: null
    };

    componentDidMount = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        //get state of canvas visualizer and audio context
        let { canvas, visualizer, audioContext } = this.state;

        //get canvas
        canvas = document.getElementById("canvas");

        //set width and height of canvas
        canvas.width = width;
        canvas.height = height;

        //create a new audio context
        audioContext = new AudioContext();

        //create visualizer with butterchurn
        visualizer = butterchurn.createVisualizer(audioContext, canvas, {
            width: width,
            height: height
        });
    }
}