import { sign } from 'jsonwebtoken'
export const genJWT = (user) => {
  return sign({ email: user.email }, process.env.APP_SECRET, {
    algorithm: 'HS256',
    expiresIn: '30 days'
  })
}
