"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type Option {
    id: ID!
    name: String!
    effect: String
  }
  type Coffee {
    id: ID!
    name: String!
    description: String
    options: [Option!]!
  }
  type DefinedCoffe {
    id: ID!
    name: String!
    description: String
    ingredients: String
  }
  input CreateCustomCoffeeInput {
    name: String!
    description: String
    options: [OptionInput!]!
  }

  input OptionInput {
    id: ID!
  }

  type Query {
    coffees: [Coffee!]!
    coffee(id: ID!): Coffee
    definedCoffees: [DefinedCoffe!]
  }

  type Mutation {
    createCustomCoffee(input: CreateCustomCoffeeInput!): Coffee
  }
`;
