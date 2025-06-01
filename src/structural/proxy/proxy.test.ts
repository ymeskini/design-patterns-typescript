import { Image } from "./Image";
import { RealImage } from "./RealImage";
import { ImageProxy } from "./ImageProxy";
import { BankAccount, RealBankAccount, BankAccountProxy } from "./BankAccountProxy";

describe("Proxy Pattern", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("Virtual Proxy (Image Loading)", () => {
        test("RealImage should load and display image", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const realImage = new RealImage("test-photo.jpg");
            realImage.display();

            expect(consoleSpy).toHaveBeenCalledWith("Loading image from disk: test-photo.jpg");
            expect(consoleSpy).toHaveBeenCalledWith("Image test-photo.jpg loaded successfully");
            expect(consoleSpy).toHaveBeenCalledWith("Displaying image: test-photo.jpg (800x600)");

            consoleSpy.mockRestore();
        });

        test("ImageProxy should implement lazy loading", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            // Creating proxy should not load the image
            const imageProxy = new ImageProxy("lazy-photo.jpg");
            expect(consoleSpy).not.toHaveBeenCalledWith("Loading image from disk: lazy-photo.jpg");

            // First display should load the image
            imageProxy.display();
            expect(consoleSpy).toHaveBeenCalledWith("Proxy: Creating real image...");
            expect(consoleSpy).toHaveBeenCalledWith("Loading image from disk: lazy-photo.jpg");
            expect(consoleSpy).toHaveBeenCalledWith("Image lazy-photo.jpg loaded successfully");
            expect(consoleSpy).toHaveBeenCalledWith("Displaying image: lazy-photo.jpg (800x600)");

            // Reset spy to verify no additional loading on second call
            consoleSpy.mockClear();

            // Second display should not reload the image
            imageProxy.display();
            expect(consoleSpy).not.toHaveBeenCalledWith("Proxy: Creating real image...");
            expect(consoleSpy).not.toHaveBeenCalledWith("Loading image from disk: lazy-photo.jpg");
            expect(consoleSpy).toHaveBeenCalledWith("Displaying image: lazy-photo.jpg (800x600)");

            consoleSpy.mockRestore();
        });

        test("Multiple ImageProxy instances should load independently", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const proxy1 = new ImageProxy("image1.jpg");
            const proxy2 = new ImageProxy("image2.jpg");

            proxy1.display();
            expect(consoleSpy).toHaveBeenCalledWith("Proxy: Creating real image...");
            expect(consoleSpy).toHaveBeenCalledWith("Loading image from disk: image1.jpg");

            proxy2.display();
            expect(consoleSpy).toHaveBeenCalledWith("Loading image from disk: image2.jpg");

            consoleSpy.mockRestore();
        });
    });

    describe("Protection Proxy (Bank Account)", () => {
        let ownerProxy: BankAccountProxy;
        let adminProxy: BankAccountProxy;
        let guestProxy: BankAccountProxy;

        beforeEach(() => {
            ownerProxy = new BankAccountProxy("owner");
            adminProxy = new BankAccountProxy("admin");
            guestProxy = new BankAccountProxy("guest");
        });

        test("real bank account should perform all operations without restrictions", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();
            const realAccount = new RealBankAccount();

            expect(realAccount.getBalance()).toBe(0);
            realAccount.deposit(500);
            expect(realAccount.getBalance()).toBe(500);
            realAccount.withdraw(200);
            expect(realAccount.getBalance()).toBe(300);

            consoleSpy.mockRestore();
        });

        test("owner proxy should allow all operations", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            expect(ownerProxy.getBalance()).toBe(0);
            ownerProxy.deposit(300);
            expect(ownerProxy.getBalance()).toBe(300);
            ownerProxy.withdraw(100);
            expect(ownerProxy.getBalance()).toBe(200);

            consoleSpy.mockRestore();
        });

        test("admin proxy should allow deposit and balance inquiry but not withdrawal", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            // Should allow balance inquiry
            expect(adminProxy.getBalance()).toBe(0);

            // Should allow deposit
            adminProxy.deposit(500);
            expect(adminProxy.getBalance()).toBe(500);

            // Should deny withdrawal
            adminProxy.withdraw(200);
            expect(consoleSpy).toHaveBeenCalledWith("Access denied: Only account owner can withdraw");
            expect(adminProxy.getBalance()).toBe(500); // Balance unchanged

            consoleSpy.mockRestore();
        });

        test("guest proxy should be denied all operations", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            // Should deny balance inquiry
            const balance = guestProxy.getBalance();
            expect(consoleSpy).toHaveBeenCalledWith("Access denied: You do not have permission to view balance");
            expect(balance).toBe(-1);

            // Should deny deposit
            guestProxy.deposit(500);
            expect(consoleSpy).toHaveBeenCalledWith("Access denied: You do not have permission to deposit");

            // Should deny withdrawal
            guestProxy.withdraw(200);
            expect(consoleSpy).toHaveBeenCalledWith("Access denied: Only account owner can withdraw");

            consoleSpy.mockRestore();
        });
    });

    describe("Proxy Interface Compliance", () => {
        test("ImageProxy should implement Image interface", () => {
            const proxy = new ImageProxy("test.jpg");
            expect(typeof proxy.display).toBe("function");
        });

        test("BankAccountProxy should implement same interface as BankAccount", () => {
            const proxy = new BankAccountProxy("owner");

            expect(typeof proxy.getBalance).toBe("function");
            expect(typeof proxy.deposit).toBe("function");
            expect(typeof proxy.withdraw).toBe("function");
        });
    });
});
