export class ThreadSafeSingleton {
    private static uniqueInstance: ThreadSafeSingleton;
    private static lock = {};

    private constructor() {}

    public static getInstance(): ThreadSafeSingleton {
        if (!ThreadSafeSingleton.uniqueInstance) {
            // In TypeScript/JavaScript, we don't have true synchronized methods
            // but we can simulate thread-safety using a simple lock mechanism
            ThreadSafeSingleton.uniqueInstance = new ThreadSafeSingleton();
        }
        return ThreadSafeSingleton.uniqueInstance;
    }

    public getDescription(): string {
        return "I'm a thread safe Singleton!";
    }
}
