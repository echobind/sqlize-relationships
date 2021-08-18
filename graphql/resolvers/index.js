const db = require('../../db/models/index')
import { company } from './company';
import { user } from './user';
import { workingDay } from './workingday';

const resolvers = {
  Query: {
    ...company.query,
    ...user.query,
    ...workingDay.query,
  },
  Mutation: {
    sampleMutation() {
      return 'sample mutation'
    },
    ...workingDay.mutation
  }
};

export default resolvers;
