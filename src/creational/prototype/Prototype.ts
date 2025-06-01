/**
 * Generic Prototype interface for demonstrating the pattern
 */
export interface Prototype {
    copy(): Prototype;
}

/**
 * Concrete Prototype 1
 */
export class ConcretePrototype1 implements Prototype {
    private value: string = 'Prototype1';

    public copy(): Prototype {
        const copy = new ConcretePrototype1();
        copy.value = this.value;
        return copy;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value: string): void {
        this.value = value;
    }
}

/**
 * Concrete Prototype 2
 */
export class ConcretePrototype2 implements Prototype {
    private data: number[] = [1, 2, 3, 4, 5];

    public copy(): Prototype {
        const copy = new ConcretePrototype2();
        copy.data = [...this.data]; // Deep copy of array
        return copy;
    }

    public getData(): number[] {
        return this.data;
    }

    public setData(data: number[]): void {
        this.data = data;
    }
}
