import { genJWT } from '../../helpers/genJWT'
import bycrypt from 'bcrypt'

export const resolvers = {
  Mutation: {
    async login (parent, { email, password }, { currentUser, prisma }) {
      const user = await prisma.user.findOne({ where: { email } })

      if (!user) throw new Error('Invalid email or password')

      const isSamePassword = await bycrypt.compare(
        password,
        user.password
      )

      if (!isSamePassword) throw new Error('Invalid email or password')

      if (!email || !password) throw new Error('please fill this out')

      return genJWT(user)
    }
  }
}
