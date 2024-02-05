"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const optionsData = [
    { id: "1", name: "Sugar", effect: "Adds sugar" },
    { id: "2", name: "Brown Sugar", effect: "Adds brown sugar" },
    { id: "3", name: "Caramel sauce", effect: "Adds caramel sauce" },
    { id: "4", name: "Vanilla syrup", effect: "Adds vanilla syrup" },
    { id: "5", name: "Decaf Coffe", effect: "Remove all the caffeine" },
    { id: "6", name: "Milk", effect: "Adds milk" },
    { id: "7", name: "Unsweetened oatmilk", effect: "Adds unsweetened oatmilk" },
    { id: "8", name: "Dash of cinnamon", effect: "Adds dash of cinnamon" },
    { id: "9", name: "Ice", effect: "Adds ice" },
    { id: "10", name: "Whipped cream", effect: "Adds whipped cream" },
    {
        id: "11",
        name: "Chopped white chocolate",
        effect: "Adds chopped white chocolate",
    },
];
let coffeesData = [
    {
        id: "1",
        name: "Iced Cinnamon Dolce Au Lait    ",
        description: "Enhance the cinnamon, butter and brown sugar notes of Starbucks® Cinnamon Dolce Flavored Coffee with this iced au lait inspired by the beloved Starbucks® Iced Cinnamon Dolce Latte at our cafés. ",
        options: optionsData,
    },
    {
        id: "2",
        name: "Iced Brown Sugar Oatmilk Shaken Espresso",
        description: "Shake up your coffee routine with a cup of creamy oatmilk, rich espresso and perfectly sweet brown sugar.",
        options: optionsData,
    },
    {
        id: "3",
        name: "White Chocolate Mocha​    ",
        description: "Espresso meets white chocolate in this classic Starbucks® drink. Learn how to make a White Chocolate Mocha at home, then top it off with a dollop of whipped cream for a sweet, creamy beverage that delights with every sip.",
        options: optionsData,
    },
    {
        id: "4",
        name: "Iced Caramel Macchiato    ",
        description: "Sweet. Creamy. And chilled to perfection. Rich espresso, milk and vanilla syrup are topped with caramel for a delightfully refreshing start to your day.    ",
        options: optionsData,
    },
    {
        id: "5",
        name: "Caffè Mocha   ",
        description: "This Starbucks classic combines espresso, bittersweet mocha sauce and steamed milk for a sweetly satisfying coffee. Top it off with whipped cream and chocolate shavings for a delicious mug of coffee ready to be enjoyed any time at home.    ",
        options: optionsData,
    },
    {
        id: "6",
        name: "Maple Vanilla and Brown Sugar Coffee  ",
        description: "With maple, vanilla and brown sugar, this recipe puts everything sweet into one delicious cup of coffee. Top it with whipped cream and cinnamon for an extra layer of yum.​    ",
        options: optionsData,
    },
];
let definedCoffeesData = [
    {
        id: "1",
        name: "Iced Brown Sugar Oatmilk Shaken Espresso",
        description: "Shake up your coffee routine with a cup of creamy oatmilk, rich espresso and perfectly sweet brown sugar.    ",
        ingredients: "2 shots espresso brewed from Starbucks® Veranda Blend® whole bean ​coffee,  light brown sugar, unsweetened oatmilk, ice, dash of cinnamon",
    },
    {
        id: "2",
        name: "Caffè Mocha",
        description: "This Starbucks classic combines espresso, bittersweet mocha sauce and steamed milk for a sweetly satisfying coffee. Top it off with whipped cream and chocolate shavings for a delicious mug of coffee ready to be enjoyed any time at home.",
        ingredients: "1 oz Starbucks® Espresso Roast ground coffee or 1 Starbucks® by Nespresso® Espresso Roast capsule, milk, mocha sauce, whipped cream, chocolate shavings",
    },
    {
        id: "3",
        name: "Caramel Macchiato",
        description: "Debuted by Starbucks in 1996, the Caramel Macchiato has been a café favorite for over two decades. Learn how to craft this coffee classic at home with this simple recipe. Make it frothy with a mix of smooth vanilla and velvety caramel for the perfect amount of sweetness. Top it off with a drizzle of caramel for a coffee that tastes as delicious as it looks.",
        ingredients: "Starbucks® Espresso Roast by Nespresso® capsule, milk, homemade canilla syrup, homemade caramel sauce​",
    },
    {
        id: "4",
        name: "Pumpkin Spice Latte",
        description: "Bring your favorite fall coffee home! Follow this simple recipe to create a cozy, homemade Pumpkin Spice Latte from scratch.",
        ingredients: "Milk, brewed Starbucks® Espresso Roast or Starbucks® by Nespresso® Espresso Roast, homemade pumpkin spice syrup, whipped cream, pumpkin pie spice ",
    },
    {
        id: "5",
        name: "Honey Oatmilk Café Au Lait",
        description: "Better days start with a sweeter sip. Welcome the sun with creamy oatmilk and a bright drizzle of honey.    ",
        ingredients: "Honey, water, Starbucks Veranda Blend, extra creamy oatmilk",
    },
    {
        id: "6",
        name: "Maple Vanilla and Brown Sugar Coffee",
        description: "With maple, vanilla and brown sugar, this recipe puts everything sweet into one delicious cup of coffee. Top it with whipped cream and cinnamon for an extra layer of yum.​",
        ingredients: "Starbucks® Maple Pecan Flavored Coffee, brown sugar, vanilla extract, whipped cream, cinnamon",
    },
];
// Resolver map
exports.resolvers = {
    Query: {
        coffees: () => {
            return coffeesData;
        },
        coffee: (parent, args) => {
            return coffeesData.find((coffee) => coffee.id === args.id);
        },
        definedCoffees: () => {
            return definedCoffeesData;
        },
    },
    Mutation: {
        createCustomCoffee: (parent, args) => {
            // Log the input arguments to see what is being passed to the resolver
            console.log("createCustomCoffee input:", args.input);
            // Validate the input options
            const coffeeOptions = args.input.options.map((optionInput) => {
                // Access the `id` property of the optionInput object
                console.log("Processing option ID:", optionInput.id); // Log the current option ID
                const option = optionsData.find((opt) => opt.id === optionInput.id);
                console.log("Found option:", option); // Log the found option
                if (!option) {
                    throw new Error(`Option with ID ${optionInput.id} not found.`);
                }
                return option;
            });
            // Generate a new coffee object
            const newCoffee = {
                id: `coffee_${coffeesData.length + 1}`, // Simple unique ID generation
                name: args.input.name,
                description: args.input.description,
                options: coffeeOptions,
            };
            coffeesData.push(newCoffee);
            return newCoffee;
        },
    },
};
exports.default = exports.resolvers;
