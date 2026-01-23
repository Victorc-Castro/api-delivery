import { Request, Response, NextFunction } from "express"
import { authConfig } from "@/configs/auth" 
import { AppError } from "@/utils/AppError"
import { verify } from "jsonwebtoken"

interface TokenPayload {     // definindo o tipo de objeto.
  role: string
  sub: string
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization  

    if(!authHeader) {                                 
      throw new AppError("JWT token not found", 401)   // verificação de se há conteúdo.
    }

    const [, token] = authHeader.split(" ") 

    const { role, sub: user_id } = verify(token, authConfig.jwt.secret) as TokenPayload  // recuperando o token.

    request.user = {  // adicionando o user dentro da requisição.
      id: user_id,
      role,
    }

    return next()
  } catch (error) {
    throw new AppError("Invalid JWT token", 401)
  }
}