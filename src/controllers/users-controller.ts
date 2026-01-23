import { Request, Response } from 'express'
import { z } from "zod"

class UsersController {
  create(request: Request, response: Response) {   // controller para retornar o conteúdo da requisição.
    const bodySchema = z.object({
      name: z.string().trim().min(2),
      email: z.string().email(),                   // validação do que é necessário para cadastrar usuário.
      password: z.string().min(6),
    })

    const { name, email, password } = bodySchema.parse(request.body)

    return response.json({ message: "ok" })
  }
}

export { UsersController }