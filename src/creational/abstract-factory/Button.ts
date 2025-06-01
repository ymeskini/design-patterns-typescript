/**
 * Abstract Button interface
 */
export interface Button {
  paint(): void;
  onClick(f: () => void): void;
}
