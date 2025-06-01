import { Amplifier } from "./Amplifier";

export class StreamingPlayer {
    private description: string;
    private currentChapter: number = 0;
    private amplifier: Amplifier;
    private movie: string = "";

    constructor(description: string, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    play(movie: string): void {
        this.movie = movie;
        this.currentChapter = 0;
        console.log(`${this.description} playing "${movie}"`);
    }

    play_2_args(movie: string, chapter: number): void {
        this.movie = movie;
        this.currentChapter = chapter;
        console.log(`${this.description} playing "${movie}" chapter ${chapter}`);
    }

    stop(): void {
        this.currentChapter = 0;
        console.log(`${this.description} stopped "${this.movie}"`);
    }

    eject(): void {
        this.movie = "";
        console.log(`${this.description} eject`);
    }

    pause(): void {
        console.log(`${this.description} paused "${this.movie}"`);
    }

    setTwoChannelAudio(): void {
        console.log(`${this.description} set two channel audio`);
    }

    setSurroundAudio(): void {
        console.log(`${this.description} set surround audio`);
    }

    toString(): string {
        return this.description;
    }
}
