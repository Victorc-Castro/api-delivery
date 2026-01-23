import { AppError } from '@/utils/AppError' // importação do AppError para validações.
import { Request, Response } from 'express'
import { prisma } from '@/database/prisma' // importação do prisma para conexão com o banco de dados.
import { hash } from "bcrypt"         // importação do bcrypt para criptografia.
import { z } from "zod"               // importação do zod para validações.

class UsersController {
  async create(request: Request, response: Response) {   // controller para retornar o conteúdo da requisição.
    const bodySchema = z.object({
      name: z.string().trim().min(2),
      email: z.string().email(),                   // validação do que é necessário para cadastrar usuário.
      password: z.string().min(6),
    })

    const { name, email, password } = bodySchema.parse(request.body)

    const userWithSameEmail = await prisma.user.findFirst({ where: { email } })

    if (userWithSameEmail) {
      throw new AppError("User with same email already exists")     // validação de se o email cadastrado já existe.
    }

    const hashedPassword = await hash(password, 8)  // criptografia da senha.

    const user = await prisma.user.create({        // metódo para criar um usuário.
      data: {
        name,
        email,                                    
        password: hashedPassword,
      },
    })

    const { password: _, ...userWithoutPassword } = user // desestruturação da senha para que ela não retorne na requisição.

    return response.status(201).json(userWithoutPassword)
  }
}

export { UsersController }