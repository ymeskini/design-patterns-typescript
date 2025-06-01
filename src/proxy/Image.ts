/**
 * Subject interface that both RealSubject and Proxy implement
 */
export interface Image {
    display(): void;
    getWidth(): number;
    getHeight(): number;
}
