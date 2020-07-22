
export const resolvers = {

  Query: {
    async memory (parent, { data }, { prisma }) {
      console.log(prisma)
    },
    async memories (parent, { data }, { prisma }) {
      console.log(prisma)
    }
  },

  Mutation: {
    async createMemory (parent, { data }, { prisma }) {
      console.log(prisma)
    },
    async updateMemory (parent, { data }, { prisma }) {
      console.log(prisma)
    },
    async deleteMemory (parent, { data }, { prisma }) {
      console.log(prisma)
    }
  }
}
