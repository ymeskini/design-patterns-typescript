import { SimpleObserver } from "./SimpleObserver";
import { SimpleSubject } from "./SimpleSubject";

const example = (): void => {
  const simpleSubject = new SimpleSubject();
  const simpleObserver = new SimpleObserver(simpleSubject);

  simpleSubject.setValue(80);
  simpleSubject.setValue(50);
};

example();
