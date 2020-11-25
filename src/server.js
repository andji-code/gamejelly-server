const express = require('express');
const mongoose = require('mongoose')
const http = require('http');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');

const {root, schema} = require('./gql')

const app = express();

app.use(express.static(__dirname + "/../public"));
app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    }),
  );

const server = http.createServer(app);
const port = process.env.PORT || 4001;

mongoose.connect("mongodb+srv://andji:gtf_MONGODB_111@cluster0.sf8yk.mongodb.net/server?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, function(err){
    if(err) return console.log(err);
    app.listen(4000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

app.get('/', (req, res) => {
 res.status(200).sendFile('/index.html');
});

server.listen(port, () => {
 console.log(`Server running at port ${port}`);
});