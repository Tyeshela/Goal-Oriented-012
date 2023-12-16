function MenuItem(name, price) {
    this.name = name;
    this.price = price;
}

function Customer(name) {
    this.name = name;
}

function placeOrder(menuItem, quantity) {
    console.log(`${this.name} ordered ${quantity} ${menuItem.name}(s) for $${menuItem.price * quantity}`);
}

const burger = new MenuItem("Burger", 5);
const customer1 = new Customer("Alice");

// Using call
placeOrder.call(customer1, burger, 2);

// Using apply
placeOrder.apply(customer1, [burger, 3]);
