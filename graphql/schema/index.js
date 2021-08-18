const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Company {
    id: Int!
    name: String
    createdAt: String!
    updatedAt: String!
    employees: [User!]!
  }

  type User {
    id: Int!
    email: String
    firstName: String
    lastName: String
    company: Company!
    createdAt: String!
    updatedAt: String!
    days: [WorkingDay]!
  }

  type WorkingDay {
    id: Int!
    weekDay: String
    workingDate: String
    isWorking: Boolean
    createdAt: String!
    updatedAt: String!
    employees: [User]!
  }

  type Query {
    sampleQuery: String!
    companies: [Company!]!
    company(id: Int!): Company!
    user(email: String!): User
    userByPk(id: Int!): User!
    users(ids: [Int]!): [User]!
    wdByPk(id: Int!): WorkingDay!
  }

  type Mutation {
    sampleMutation: String!
    setDays(ids: [Int]!): [User]!
  }
`;

export default typeDefs