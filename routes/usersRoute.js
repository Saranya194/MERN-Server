const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');

const router = express.Router();

const server = new ApolloServer({ typeDefs, resolvers });

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { data, errors } = await server.executeOperation({
      query: gql`
        mutation CreateUser($name: String!, $email: String!, $password: String!) {
          createUser(input: { name: $name, email: $email, password: $password }) {
            _id
            name
            email
            password
          }
        }
      `,
      variables: {
        name,
        email,
        password,
      },
    });

    if (errors) {
      return res.status(500).send({ message: errors });
    }
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
