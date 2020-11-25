const { buildSchema } = require("graphql");

module.exports.schema = buildSchema(`
  type Query {
    test: String
    helloGet(text: String ): String
  }
`);
 
// The root provides a resolver function for each API endpoint
module.exports.root = {
  test: () => 'GraphQL ran nice! =^.^=',
  helloGet: ({text}) => text
};