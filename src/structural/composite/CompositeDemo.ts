import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Waitress } from "./Waitress";

export function compositePatternDemo(): void {
    console.log("=== Composite Pattern Demo ===\n");

    const pancakeHouseMenu = new Menu("PANCAKE HOUSE MENU", "Breakfast");
    const dinerMenu = new Menu("DINER MENU", "Lunch");
    const cafeMenu = new Menu("CAFE MENU", "Dinner");
    const dessertMenu = new Menu("DESSERT MENU", "Dessert of course!");

    const allMenus = new Menu("ALL MENUS", "All menus combined");

    allMenus.add(pancakeHouseMenu);
    allMenus.add(dinerMenu);
    allMenus.add(cafeMenu);

    pancakeHouseMenu.add(new MenuItem(
        "K&B's Pancake Breakfast",
        "Pancakes with scrambled eggs and toast",
        true,
        2.99
    ));
    pancakeHouseMenu.add(new MenuItem(
        "Regular Pancake Breakfast",
        "Pancakes with fried eggs, sausage",
        false,
        2.99
    ));
    pancakeHouseMenu.add(new MenuItem(
        "Blueberry Pancakes",
        "Pancakes made with fresh blueberries, and blueberry syrup",
        true,
        3.49
    ));

    dinerMenu.add(new MenuItem(
        "Vegetarian BLT",
        "(Fakin') Bacon with lettuce & tomato on whole wheat",
        true,
        2.99
    ));
    dinerMenu.add(new MenuItem(
        "BLT",
        "Bacon with lettuce & tomato on whole wheat",
        false,
        2.99
    ));

    // Add dessert submenu to diner menu
    dinerMenu.add(dessertMenu);

    dessertMenu.add(new MenuItem(
        "Apple Pie",
        "Apple pie with a flakey crust, topped with vanilla ice cream",
        true,
        1.59
    ));

    cafeMenu.add(new MenuItem(
        "Veggie Burger and Air Fries",
        "Veggie burger on a whole wheat bun, lettuce, tomato, and fries",
        true,
        3.99
    ));
    cafeMenu.add(new MenuItem(
        "Soup of the day",
        "A cup of the soup of the day, with a side salad",
        false,
        3.69
    ));

    const waitress = new Waitress(allMenus);
    waitress.printMenu();
}

// Run the demo if this file is executed directly
if (require.main === module) {
    compositePatternDemo();
}
