import { SimpleRemoteControl } from "./SimpleRemoteControl";
import { RemoteControl } from "./RemoteControl";
import { Light } from "./Light";
import { GarageDoor } from "./GarageDoor";
import { LightOnCommand, LightOffCommand } from "./LightCommands";
import { GarageDoorOpenCommand, GarageDoorCloseCommand } from "./GarageDoorCommands";

describe("Command Pattern", () => {
    test("SimpleRemoteControl should execute commands", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        const remote = new SimpleRemoteControl();
        const light = new Light();
        const lightOnCommand = new LightOnCommand(light);

        remote.setCommand(lightOnCommand);
        remote.buttonWasPressed();

        expect(consoleSpy).toHaveBeenCalledWith("Light is on");

        consoleSpy.mockRestore();
    });

    test("RemoteControl should manage multiple commands", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        const remote = new RemoteControl();
        const light = new Light();
        const garageDoor = new GarageDoor();

        const lightOn = new LightOnCommand(light);
        const lightOff = new LightOffCommand(light);
        const garageOpen = new GarageDoorOpenCommand(garageDoor);
        const garageClose = new GarageDoorCloseCommand(garageDoor);

        remote.setCommand(0, lightOn, lightOff);
        remote.setCommand(1, garageOpen, garageClose);

        remote.onButtonWasPushed(0);  // Turn light on
        remote.offButtonWasPushed(0); // Turn light off
        remote.onButtonWasPushed(1);  // Open garage
        remote.offButtonWasPushed(1); // Close garage

        expect(consoleSpy).toHaveBeenCalledWith("Light is on");
        expect(consoleSpy).toHaveBeenCalledWith("Light is off");
        expect(consoleSpy).toHaveBeenCalledWith("Garage Door is Open");
        expect(consoleSpy).toHaveBeenCalledWith("Garage Door is Closed");

        consoleSpy.mockRestore();
    });

    test("Commands should encapsulate requests", () => {
        const light = new Light();
        const lightOnCommand = new LightOnCommand(light);

        // The command encapsulates the request - we can store it, pass it around, etc.
        expect(lightOnCommand).toBeDefined();
        expect(typeof lightOnCommand.execute).toBe("function");
    });

    test("RemoteControl toString should format correctly", () => {
        const remote = new RemoteControl();
        const light = new Light();
        const lightOn = new LightOnCommand(light);
        const lightOff = new LightOffCommand(light);

        remote.setCommand(0, lightOn, lightOff);

        const remoteString = remote.toString();
        expect(remoteString).toContain("------ Remote Control -------");
        expect(remoteString).toContain("[slot 0]");
        expect(remoteString).toContain("LightOnCommand");
        expect(remoteString).toContain("LightOffCommand");
    });
});
