import { Handler } from './Handler';

export class MonkeyHandler extends Handler {
    public handle(request: string): string | null {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}`;
        }
        return super.handle(request);
    }
}

export class SquirrelHandler extends Handler {
    public handle(request: string): string | null {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}`;
        }
        return super.handle(request);
    }
}

export class DogHandler extends Handler {
    public handle(request: string): string | null {
        if (request === 'MeatBall') {
            return `Dog: I'll eat the ${request}`;
        }
        return super.handle(request);
    }
}
