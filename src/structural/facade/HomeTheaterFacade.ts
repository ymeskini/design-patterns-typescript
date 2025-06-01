import { Amplifier } from "./Amplifier";
import { Tuner } from "./Tuner";
import { StreamingPlayer } from "./StreamingPlayer";
import { Projector } from "./Projector";
import { TheaterLights } from "./TheaterLights";
import { Screen } from "./Screen";
import { PopcornPopper } from "./PopcornPopper";

export class HomeTheaterFacade {
    private amp: Amplifier;
    private tuner: Tuner;
    private player: StreamingPlayer;
    private projector: Projector;
    private lights: TheaterLights;
    private screen: Screen;
    private popper: PopcornPopper;

    constructor(
        amp: Amplifier,
        tuner: Tuner,
        player: StreamingPlayer,
        projector: Projector,
        screen: Screen,
        lights: TheaterLights,
        popper: PopcornPopper
    ) {
        this.amp = amp;
        this.tuner = tuner;
        this.player = player;
        this.projector = projector;
        this.screen = screen;
        this.lights = lights;
        this.popper = popper;
    }

    watchMovie(movie: string): void {
        console.log("Get ready to watch a movie...");
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setStreamingPlayer(this.player);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.player.on();
        this.player.play(movie);
    }

    endMovie(): void {
        console.log("Shutting movie theater down...");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.player.stop();
        this.player.off();
    }

    listenToRadio(frequency: number): void {
        console.log("Tuning in the airwaves...");
        this.tuner.on();
        this.tuner.setFrequency(frequency);
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setTuner(this.tuner);
    }

    endRadio(): void {
        console.log("Shutting down the tuner...");
        this.tuner.off();
        this.amp.off();
    }
}
