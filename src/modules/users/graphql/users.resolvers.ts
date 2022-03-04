import ListUserService from '@services/ListUserService';

const usersResolvers = {
  Query: {
    getAllUser() {
      const listUserService = new ListUserService();
      return listUserService.execute();
    },
  },
  // Mutation: {},
};

export default usersResolvers;
