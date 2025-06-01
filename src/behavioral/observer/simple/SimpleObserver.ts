import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class SimpleObserver implements Observer {
  private value: number;

  constructor(private readonly simpleSubject: Subject) {
    this.simpleSubject = simpleSubject;
    simpleSubject.registerObserver(this);
  }

  update(value: number): void {
    this.value = value;
    this.display();
  }

  display(): void {
    console.log("Value: " + this.value);
  }
}
