import { AppError } from '@/utils/AppError'
import { Request, Response } from 'express'
import { authConfig } from "@/configs/auth"  // importação da configuração da autenticação.
import { prisma } from '@/database/prisma'  // importação do prisma para conexão com o banco de dados.
import { sign } from 'jsonwebtoken'  // 
import { compare } from 'bcrypt'          // importação do bcrypt para comparação da senhas.
import { z } from "zod"    // importação do zod para validações.

class SessionsController {
  async create(request: Request, response: Response) {  // controller para retornar o conteúdo da requisição.
    const bodySchema = z.object({
      email: z.string().email(),                    // validação do que é necessário para cadastrar usuário.
      password: z.string().min(6),
    })
    
    const { email, password } = bodySchema.parse(request.body)

    const user = await prisma.user.findFirst({
      where: { email },                                 // recuperando o usuário com base no email.
    })

    if(!user) {
      throw new AppError("Invalid email or password", 401)        // validação para caso não ache nenhum usuário.
    }

    const passwordMatched = await compare(password, user.password)  // comparação de senhas com bcrypt.

    if(!passwordMatched) {
      throw new AppError("Invalid email or password", 401)     // erro lançado caso as senhas não sejam compatíveis.
    }

    const { secret, expiresIn } = authConfig.jwt  // desestruturando as configurações de autenticação.

    const token = sign({ role: user.role ?? "customer" }, secret, {    // criando o token.
      subject: user.id,
      expiresIn}
    )

    return response.json({ token })
  }
}

export { SessionsController }