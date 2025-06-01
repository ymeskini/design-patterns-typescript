import { WindowsFactory } from './WindowsFactory';
import { MacFactory } from './MacFactory';
import { Application } from './Application';
import { WindowsButton } from './WindowsButton';
import { MacButton } from './MacButton';
import { WindowsCheckbox } from './WindowsCheckbox';
import { MacCheckbox } from './MacCheckbox';

describe('Abstract Factory Pattern', () => {
  describe('WindowsFactory', () => {
    let factory: WindowsFactory;

    beforeEach(() => {
      factory = new WindowsFactory();
    });

    test('should create Windows button', () => {
      const button = factory.createButton();
      expect(button).toBeInstanceOf(WindowsButton);
    });

    test('should create Windows checkbox', () => {
      const checkbox = factory.createCheckbox();
      expect(checkbox).toBeInstanceOf(WindowsCheckbox);
    });
  });

  describe('MacFactory', () => {
    let factory: MacFactory;

    beforeEach(() => {
      factory = new MacFactory();
    });

    test('should create Mac button', () => {
      const button = factory.createButton();
      expect(button).toBeInstanceOf(MacButton);
    });

    test('should create Mac checkbox', () => {
      const checkbox = factory.createCheckbox();
      expect(checkbox).toBeInstanceOf(MacCheckbox);
    });
  });

  describe('WindowsButton', () => {
    let button: WindowsButton;

    beforeEach(() => {
      button = new WindowsButton();
    });

    test('should paint Windows button', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      button.paint();
      expect(consoleSpy).toHaveBeenCalledWith('Rendering a Windows-style button');
      consoleSpy.mockRestore();
    });

    test('should handle click events', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const mockCallback = jest.fn();

      button.onClick(mockCallback);

      expect(consoleSpy).toHaveBeenCalledWith('Windows button clicked');
      expect(mockCallback).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('MacButton', () => {
    let button: MacButton;

    beforeEach(() => {
      button = new MacButton();
    });

    test('should paint Mac button', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      button.paint();
      expect(consoleSpy).toHaveBeenCalledWith('Rendering a Mac-style button');
      consoleSpy.mockRestore();
    });

    test('should handle click events', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const mockCallback = jest.fn();

      button.onClick(mockCallback);

      expect(consoleSpy).toHaveBeenCalledWith('Mac button clicked');
      expect(mockCallback).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('WindowsCheckbox', () => {
    let checkbox: WindowsCheckbox;

    beforeEach(() => {
      checkbox = new WindowsCheckbox();
    });

    test('should paint Windows checkbox', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      checkbox.paint();
      expect(consoleSpy).toHaveBeenCalledWith('Rendering a Windows-style checkbox');
      consoleSpy.mockRestore();
    });

    test('should start unchecked', () => {
      expect(checkbox.isChecked()).toBe(false);
    });

    test('should toggle state', () => {
      const consoleSpy = jest.spyOn(console, 'log');

      checkbox.toggle();
      expect(checkbox.isChecked()).toBe(true);
      expect(consoleSpy).toHaveBeenCalledWith('Windows checkbox is now checked');

      checkbox.toggle();
      expect(checkbox.isChecked()).toBe(false);
      expect(consoleSpy).toHaveBeenCalledWith('Windows checkbox is now unchecked');

      consoleSpy.mockRestore();
    });
  });

  describe('MacCheckbox', () => {
    let checkbox: MacCheckbox;

    beforeEach(() => {
      checkbox = new MacCheckbox();
    });

    test('should paint Mac checkbox', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      checkbox.paint();
      expect(consoleSpy).toHaveBeenCalledWith('Rendering a Mac-style checkbox');
      consoleSpy.mockRestore();
    });

    test('should start unchecked', () => {
      expect(checkbox.isChecked()).toBe(false);
    });

    test('should toggle state', () => {
      const consoleSpy = jest.spyOn(console, 'log');

      checkbox.toggle();
      expect(checkbox.isChecked()).toBe(true);
      expect(consoleSpy).toHaveBeenCalledWith('Mac checkbox is now checked');

      checkbox.toggle();
      expect(checkbox.isChecked()).toBe(false);
      expect(consoleSpy).toHaveBeenCalledWith('Mac checkbox is now unchecked');

      consoleSpy.mockRestore();
    });
  });

  describe('Application', () => {
    test('should work with Windows factory', () => {
      const factory = new WindowsFactory();
      const app = new Application(factory);

      const consoleSpy = jest.spyOn(console, 'log');

      app.paint();
      expect(consoleSpy).toHaveBeenCalledWith('Rendering a Windows-style button');
      expect(consoleSpy).toHaveBeenCalledWith('Rendering a Windows-style checkbox');

      consoleSpy.mockRestore();
    });

    test('should work with Mac factory', () => {
      const factory = new MacFactory();
      const app = new Application(factory);

      const consoleSpy = jest.spyOn(console, 'log');

      app.paint();
      expect(consoleSpy).toHaveBeenCalledWith('Rendering a Mac-style button');
      expect(consoleSpy).toHaveBeenCalledWith('Rendering a Mac-style checkbox');

      consoleSpy.mockRestore();
    });

    test('should interact with UI elements', () => {
      const factory = new WindowsFactory();
      const app = new Application(factory);

      const consoleSpy = jest.spyOn(console, 'log');

      app.interact();
      expect(consoleSpy).toHaveBeenCalledWith('Windows button clicked');
      expect(consoleSpy).toHaveBeenCalledWith('Button action executed!');
      expect(consoleSpy).toHaveBeenCalledWith('Windows checkbox is now checked');
      expect(consoleSpy).toHaveBeenCalledWith('Checkbox state: true');

      consoleSpy.mockRestore();
    });
  });
});
