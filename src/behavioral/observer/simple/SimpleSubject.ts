import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class SimpleSubject implements Subject {
  private observers: Observer[];
  private value: number;

  constructor() {
    this.observers = [];
    this.value = 0;
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.value);
    }
  }

  setValue(value: number): void {
    this.value = value;
    this.notifyObservers();
  }
}
