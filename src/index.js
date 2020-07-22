import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import expressJwt from 'express-jwt'

import { genSchema } from './helpers/genSchema'
require('dotenv').config();

(async () => {
  const app = express()
  // middlware
  app.use(
    expressJwt({
      secret: process.env.APP_SECRET,
      algorithms: ['HS256'],
      credentialsRequired: false
    })
  )

  const prisma = new PrismaClient()

  const context = ({ req }) => {
    const currentUser = req.user || null
    return {
      currentUser,
      ...req,
      prisma
    }
  }

  const server = new ApolloServer({
    schema: genSchema(),
    context,
    playground: true,
    introspection: true
  })

  server.applyMiddleware({ app, path: '/graphql' })

  app.listen(4000, () => {
    console.log('http://localhost:4000/graphql')
  })
})().catch(err => {
  console.error(err)
})
