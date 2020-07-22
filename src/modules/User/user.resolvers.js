export const resolvers = {
  Query: {
    users: async (parent, args, { user, prisma }) => {
      const allUsers = await prisma.user.findMany({
        include: {
          memories: true
        }
      })
      return allUsers
    }
  }
}
