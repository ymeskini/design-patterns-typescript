import { Amplifier } from "./Amplifier";
import { Tuner } from "./Tuner";
import { StreamingPlayer } from "./StreamingPlayer";
import { Projector } from "./Projector";
import { TheaterLights } from "./TheaterLights";
import { Screen } from "./Screen";
import { PopcornPopper } from "./PopcornPopper";
import { HomeTheaterFacade } from "./HomeTheaterFacade";

export function facadePatternDemo(): void {
    console.log("=== Facade Pattern Demo ===\n");

    const amp = new Amplifier("Amplifier");
    const tuner = new Tuner("AM/FM Tuner");
    const player = new StreamingPlayer("Streaming Player", amp);
    const projector = new Projector("Projector");
    const screen = new Screen("Theater Screen");
    const lights = new TheaterLights("Theater Ceiling Lights");
    const popper = new PopcornPopper("Popcorn Popper");

    const homeTheater = new HomeTheaterFacade(
        amp, tuner, player, projector, screen, lights, popper
    );

    homeTheater.watchMovie("Raiders of the Lost Ark");
    console.log("\n");
    homeTheater.endMovie();
}

// Run the demo if this file is executed directly
if (require.main === module) {
    facadePatternDemo();
}
