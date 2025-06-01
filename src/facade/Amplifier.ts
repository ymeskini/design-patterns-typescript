import { StreamingPlayer } from "./StreamingPlayer";
import { Tuner } from "./Tuner";

export class Amplifier {
    private description: string;
    private tuner?: Tuner;
    private player?: StreamingPlayer;

    constructor(description: string) {
        this.description = description;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    setStereoSound(): void {
        console.log(`${this.description} stereo mode on`);
    }

    setSurroundSound(): void {
        console.log(`${this.description} surround sound on (5 speakers, 1 subwoofer)`);
    }

    setVolume(level: number): void {
        console.log(`${this.description} setting volume to ${level}`);
    }

    setTuner(tuner: Tuner): void {
        console.log(`${this.description} setting tuner to ${tuner.toString()}`);
        this.tuner = tuner;
    }

    setStreamingPlayer(player: StreamingPlayer): void {
        console.log(`${this.description} setting Streaming player to ${player.toString()}`);
        this.player = player;
    }

    toString(): string {
        return this.description;
    }
}
