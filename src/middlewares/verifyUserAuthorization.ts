import { Request, Response, NextFunction } from "express"
import { AppError } from "@/utils/AppError"

function verifyUserAuthorization(role: string[]) {  
  return (request: Request, response: Response, next: NextFunction) => {   // criando verificação de autorização.
    if(!request.user) {
      throw new AppError("Unauthorized", 401) 
    }

    if(!role.includes(request.user.role)) {       // tratativas de erro para caso o usuário não tenha autorização.
      throw new AppError("Unauthorized", 401)
    }

    return next()
  }
}

export { verifyUserAuthorization }