const usersResolvers = {
  Query: {
    getAllUser() {
      return [{
        name: 'Fabio',
      },
      {
        name: 'Priscila',
      }];
    },
  },
  // Mutation: {

  // },
};

export default usersResolvers;
