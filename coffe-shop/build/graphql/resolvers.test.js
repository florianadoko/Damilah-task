"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = require("./resolvers");
describe("GraphQL Resolvers", () => {
    describe("Query", () => {
        it("should return a list of all coffees", () => {
            const result = resolvers_1.resolvers.Query.coffees();
            expect(result).toBeInstanceOf(Array);
            expect(result).toHaveLength(6); // assuming you have 6 coffees in your mock data
            result.forEach((coffee) => {
                expect(coffee).toHaveProperty("id");
                expect(coffee).toHaveProperty("name");
                expect(coffee).toHaveProperty("description");
                expect(coffee.options).toBeInstanceOf(Array);
            });
        });
        // it("should return a coffee by id", () => {
        //   const args = { id: "1" };
        //   const result = resolvers.Query.coffee(null, args);
        //   expect(result).toBeDefined();
        //   expect(result).toHaveProperty("id", "1");
        // });
        // it("should return undefined for a coffee that does not exist", () => {
        //   const args = { id: "non_existing_id" };
        //   const result = resolvers.Query.coffee(null, args);
        //   expect(result).toBeUndefined();
        // });
        // it("should return a list of all defined coffees", () => {
        //   const result = resolvers.Query.definedCoffees();
        //   expect(result).toBeInstanceOf(Array);
        //   // Add more assertions based on your data structure
        // });
    });
    // describe("Mutation", () => {
    //   it("should create a custom coffee", () => {
    //     const args = {
    //       input: {
    //         name: "Custom Coffee",
    //         description: "A delicious custom coffee",
    //         options: [{ id: "1" }, { id: "2" }],
    //       },
    //     };
    //     const initialNumberOfCoffees = resolvers.Query.coffees().length;
    //     const result = resolvers.Mutation.createCustomCoffee(null, args);
    //     expect(result).toHaveProperty("id");
    //     expect(result).toHaveProperty("name", "Custom Coffee");
    //     expect(resolvers.Query.coffees()).toHaveLength(
    //       initialNumberOfCoffees + 1
    //     );
    //   });
    //   it("should throw an error for an option that does not exist", () => {
    //     const args = {
    //       input: {
    //         name: "Custom Coffee",
    //         description: "A delicious custom coffee",
    //         options: [{ id: "non_existing_id" }],
    //       },
    //     };
    //     expect(() => {
    //       resolvers.Mutation.createCustomCoffee(null, args);
    //     }).toThrow();
    //   });
    // });
});
