export abstract class MenuComponent {
    add(menuComponent: MenuComponent): void {
        throw new Error("UnsupportedOperationException");
    }

    remove(menuComponent: MenuComponent): void {
        throw new Error("UnsupportedOperationException");
    }

    getChild(i: number): MenuComponent {
        throw new Error("UnsupportedOperationException");
    }

    getName(): string {
        throw new Error("UnsupportedOperationException");
    }

    getDescription(): string {
        throw new Error("UnsupportedOperationException");
    }

    getPrice(): number {
        throw new Error("UnsupportedOperationException");
    }

    isVegetarian(): boolean {
        throw new Error("UnsupportedOperationException");
    }

    print(): void {
        throw new Error("UnsupportedOperationException");
    }
}
