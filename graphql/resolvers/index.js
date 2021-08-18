const db = require('../../db/models/index')
import { company } from './company';
const resolvers = {
  Query: {
    ...company.query
  },
  Mutation: {
    sampleMutation() {
      return 'sample mutation'
    }
  }
};

export default resolvers;
