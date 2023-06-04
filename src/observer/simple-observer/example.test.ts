import { SimpleObserver } from "./SimpleObserver";
import { SimpleSubject } from "./SimpleSubject";

describe("simple-observer", () => {
    it('should send values to observers', () => {
        const consoleSpy = jest.spyOn(console, 'log');

        const simpleSubject = new SimpleSubject();
        new SimpleObserver(simpleSubject);
      
        simpleSubject.setValue(80);
        expect(consoleSpy).toHaveBeenCalledWith('Value: 80');
        simpleSubject.setValue(50);
        expect(consoleSpy).toHaveBeenCalledWith('Value: 50');
    });
});