/**
 * Bridge Pattern - Implementor
 * Abstract base class for TV implementations
 */
export abstract class TV {
    public abstract on(): void;
    public abstract off(): void;
    public abstract tuneChannel(channel: number): void;
    public abstract getChannel(): number;
}
