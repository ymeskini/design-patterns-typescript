import { Sony } from "./Sony";
import { LG } from "./LG";
import { TVFactory } from "./TVFactory";
import { GenericRemote } from "./GenericRemote";
import { SpecialRemote } from "./SpecialRemote";

describe("Bridge Pattern", () => {
    let tvFactory: TVFactory;

    beforeEach(() => {
        tvFactory = new TVFactory();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("TV Implementations", () => {
        test("Sony TV should implement basic operations", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const sonyTV = tvFactory.getTV("Sony");
            sonyTV.on();
            sonyTV.off();
            sonyTV.tuneChannel(5);

            expect(consoleSpy).toHaveBeenCalledWith("Turning on the Sony TV");
            expect(consoleSpy).toHaveBeenCalledWith("Turning off the Sony TV");
            expect(consoleSpy).toHaveBeenCalledWith("Set the Sony TV station to 5");

            consoleSpy.mockRestore();
        });

        test("LG TV should implement basic operations", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const lgTV = tvFactory.getTV("LG");
            lgTV.on();
            lgTV.off();
            lgTV.tuneChannel(10);

            expect(consoleSpy).toHaveBeenCalledWith("Turning on the LG TV");
            expect(consoleSpy).toHaveBeenCalledWith("Turning off the LG TV");
            expect(consoleSpy).toHaveBeenCalledWith("Set the LG TV Channel to 10");

            consoleSpy.mockRestore();
        });
    });

    describe("Remote Control Abstractions", () => {
        test("GenericRemote should control TV operations", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();
            const remote = new GenericRemote(tvFactory);

            remote.on();
            remote.off();
            remote.setChannel(7);

            consoleSpy.mockRestore();
        });

        test("SpecialRemote should provide additional channel functionality", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();
            const specialRemote = new SpecialRemote(tvFactory);

            specialRemote.on();
            specialRemote.up();
            specialRemote.down();
            specialRemote.off();

            consoleSpy.mockRestore();
        });

        test("Remote should work with different TV implementations", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const sonyRemote = new GenericRemote(tvFactory);
            const lgRemote = new GenericRemote(tvFactory);

            sonyRemote.on();
            lgRemote.on();

            consoleSpy.mockRestore();
        });
    });

    describe("TVFactory", () => {
        test("should create Sony TV instances", () => {
            const tv = tvFactory.getTV("Sony");
            expect(tv).toBeInstanceOf(Sony);
        });

        test("should create LG TV instances", () => {
            const tv = tvFactory.getTV("LG");
            expect(tv).toBeInstanceOf(LG);
        });

        test("should throw error for unknown TV brand", () => {
            expect(() => tvFactory.getTV("Unknown")).toThrow("Invalid TV Type");
        });
    });
});
