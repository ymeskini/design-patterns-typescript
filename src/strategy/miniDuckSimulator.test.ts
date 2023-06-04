import { miniDuckSimulator } from './miniDuckSimulator';

describe('miniDuckSimulatorTest', () => {
  it('run miniDuckSimulator', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    miniDuckSimulator();
    expect(consoleSpy).toHaveBeenCalledWith('Quack');
    expect(consoleSpy).toHaveBeenCalledWith("I'm flying!!");
    expect(consoleSpy).toHaveBeenCalledWith("I can't fly");
    expect(consoleSpy).toHaveBeenCalledWith("I'm flying with a rocket!");
  });
});
