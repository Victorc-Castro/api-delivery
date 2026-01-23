import { env } from "../env"

export const authConfig = {
  jwt: {
    secret: env.JWT_SECRET, // variável de ambiente.
    expiresIn: "1d",
  },
}