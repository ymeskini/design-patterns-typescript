import { Subject } from "rxjs";

export class SimpleSubject extends Subject<number> {
  private value: number = 0;

  constructor() {
    super();
  }

  public setValue(value: number): void {
    this.value = value;
    this.next(value);
  }

  public getValue(): number {
    return this.value;
  }
}



