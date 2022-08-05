import * as Tone  from "tone";

export default class RandomSynth {
    readonly synth: Tone.Synth<Tone.SynthOptions> // can add 'any' type to make agnostic, can use pipes to make multiple types

    pitchSet: string[]
    constructor() {
        //default pitch set
        this.pitchSet = ["B", "C", "D", "E", "G"]
        this.synth = new Tone.Synth().toDestination()
    }

    playNote(note: string) {
        this.synth.triggerAttackRelease(`${note}4`, "8n")
    }

    playRandomNoteFromPitchSet() {
        const oct = Math.floor((Math.random() * 5) + 1)
        const note = this.pitchSet.at(Math.floor(Math.random() * this.pitchSet.length) - 1)
        
        this.synth.triggerAttackRelease(`${note}${oct}`, "16n")
    }

    startGenerating() {
        Tone.Transport.scheduleRepeat((time: number) => {
            console.log(`transport time: ${time}`)
            
            this.playRandomNoteFromPitchSet()
        }, "8n")

        Tone.Transport.start()
    }

    stop() {
        Tone.Transport.cancel()
        Tone.Transport.stop()
    }
}