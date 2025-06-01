export class GarageDoor {
    constructor() {}

    up(): void {
        console.log("Garage Door is Open");
    }

    down(): void {
        console.log("Garage Door is Closed");
    }

    stop(): void {
        console.log("Garage Door is Stopped");
    }

    lightOn(): void {
        console.log("Garage light is on");
    }

    lightOff(): void {
        console.log("Garage light is off");
    }
}
