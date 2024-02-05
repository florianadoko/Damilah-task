import { gql } from "apollo-server-express";

export const typeDefs = gql`
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
