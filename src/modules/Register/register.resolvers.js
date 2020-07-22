import { genJWT } from '../../helpers/genJWT'
import bcrypt from 'bcrypt'

export const resolvers = {
  Mutation: {
    async register (parent, { data }, { prisma }) {
      const hashedPassword = await bcrypt.hash(data.password, 10)

      const user = await prisma.user.create({
        data: {
          ...data,
          password: hashedPassword
        }
      })

      return genJWT(user)
    }
  }
}
