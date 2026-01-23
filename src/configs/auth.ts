export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET, // variável de ambiente.
    expiresIn: "1d",
  },
}