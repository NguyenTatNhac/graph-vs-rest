const graphqlHTTP = require('express-graphql');
import schema from "./Schema";
import resolver from "./Resolver";

const expressGraphQl = graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
});

export default expressGraphQl;
