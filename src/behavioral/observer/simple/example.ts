import { SimpleSubject } from "./SimpleSubject";
import { SimpleObserver } from "./SimpleObserver";

const example = () => {
  const simpleSubject = new SimpleSubject();
  const simpleObserver = new SimpleObserver(simpleSubject);

  simpleSubject.setValue(80);

  simpleSubject.removeObserver(simpleObserver);
};

example();
