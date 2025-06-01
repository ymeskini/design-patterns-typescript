import { SimpleRemoteControl } from "./SimpleRemoteControl";
import { Light } from "./Light";
import { GarageDoor } from "./GarageDoor";
import { LightOnCommand } from "./LightCommands";
import { GarageDoorOpenCommand } from "./GarageDoorCommands";

export function commandPatternDemo(): void {
    console.log("=== Command Pattern Demo ===\n");

    const remote = new SimpleRemoteControl();
    const light = new Light();
    const garageDoor = new GarageDoor();
    const lightOn = new LightOnCommand(light);
    const garageOpen = new GarageDoorOpenCommand(garageDoor);

    remote.setCommand(lightOn);
    remote.buttonWasPressed();

    remote.setCommand(garageOpen);
    remote.buttonWasPressed();
}

// Run the demo if this file is executed directly
if (require.main === module) {
    commandPatternDemo();
}
