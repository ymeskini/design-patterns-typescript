import { SimpleSubject } from "./SimpleSubject";

export class SimpleObserver {
  private value: number = 0;

  constructor(private subject: SimpleSubject) {
    this.subject.subscribe((value) => {
      this.value = value;
      this.display();
    });
  }

  display(): void {
    console.log(`Value: ${this.value}`);
  }
}
