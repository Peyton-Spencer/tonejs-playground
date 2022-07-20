import React from 'react';
import './App.css';
import './Note.css';
import RandomSynth from "./RandomSynth";

export default function App() {
  const synth = new RandomSynth();

  return (
    <div className="App">
      <div className="note-wrapper">
        <button className="note" onClick={() => synth.playNote("C")}>
          C
        </button>
        <button className="note" onClick={() => synth.playNote("D")}>
          D
        </button>
        <button className="note" onClick={() => synth.playNote("E")}>
          E
        </button>
        <button className="note" onClick={() => synth.playNote("G")}>
          G
        </button>
        <button className="note" onClick={() => synth.playNote("A")}>
          A
        </button>
        <button className='note' onClick={() => synth.startGenerating()}>
          Start Generating
        </button>
        <button className='note' onClick={() => synth.stop()}>
          Stop Generating
        </button>
      </div>
    </div>
  );
}
