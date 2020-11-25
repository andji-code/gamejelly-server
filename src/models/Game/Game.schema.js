const MTGQL = require('mongoose-schema-to-graphql');

const schema = new mongoose.Schema({ 
  name: 'string', size: 'number'
});

const config = {
  name: 'questionType',
  description: 'Question collection\'s type',
  class: 'GraphQLObjectType',
  schema: questionSchema,
  exclude: ['_id']
};

module.exports.Game = mongoose.model('Game', schema);
module.exports.TGame = MTGQL(config)