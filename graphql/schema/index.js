const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Company {
    id: Int!
    name: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    sampleQuery: String!
    companies: [Company!]!
  }

  type Mutation {
    sampleMutation: String!
  }
`;

export default typeDefs