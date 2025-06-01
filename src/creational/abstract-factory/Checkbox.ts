/**
 * Abstract Checkbox interface
 */
export interface Checkbox {
  paint(): void;
  isChecked(): boolean;
  toggle(): void;
}
