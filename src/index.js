const { ApolloServer, gql } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function createContext() {
  return { prisma }
}

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    users: [User]
  }

  type Mutation {
    createUser: User
  }

  type User {
    name: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      const allUsers = await context.prisma.user.findMany({
        include: { 
          posts: true,
          profile: true 
        },
      })
      return allUsers
      
    }
  },
  Mutation: {
    createUser: async (parent, args, context) => {
      const user = await context.prisma.user.create({
        data: {
          name: "isaac@businesscreditreports.com",
          email: "Isaac Weber",
          posts: {
            create: { title: "Hello World" },
          },
          profile: {
            create: { bio:  "I like turtles" }
          }
        }
      })

      return user
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
  playground: true,
  introspection: true
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
