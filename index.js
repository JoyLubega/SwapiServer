   const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const resolvers = require("./resolvers");

const starWarsAPI = require("./data/people");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    starWarsAPI: new starWarsAPI(),
  }),
});

server.listen(process.env.PORT || 4000).then(() => {
  console.log(`
        Server is running!
        Listening on port 4000
      `);
});