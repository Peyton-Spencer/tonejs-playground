import * as Tone  from "tone";

export default class RandomSynth {
    readonly synth: Tone.Synth<Tone.SynthOptions>
    constructor() {
        this.synth = new Tone.Synth().toDestination()
    }

    playNote(note: string) {
        this.synth.triggerAttackRelease(`${note}4`, "8n")
    }

    playNoteRandomOctave(note: string) {
        const oct = Math.floor((Math.random() * 5) + 1)
        this.synth.triggerAttackRelease(`${note}${oct}`, "16n")
    }

    startGenerating() {
        Tone.Transport.scheduleRepeat((time: number) => {
            console.log(`transport time: ${time}`)
            
            this.playNoteRandomOctave("A")
        }, "8n")

        Tone.Transport.start()
    }

    stop() {
        Tone.Transport.stop()
    }
}