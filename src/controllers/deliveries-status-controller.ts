import { Request, Response } from 'express'
import { prisma } from '@/database/prisma'  // importação do banco de dados.
import { z } from "zod"  // zod para as validações.

class DeliveriesStatusController {
  async update(request: Request, reponse: Response) {  // método para atualizar os status.
    const paramsSchema = z.object({
      id: z.string().uuid(),                     // validações dos parâmetros.
    })

    const bodySchema = z.object({
      status: z.enum(["processing", "shipped", "delivered"]),   // validação do corpo da requisição.
    })

    const { id } = paramsSchema.parse(request.params)
    const { status } = bodySchema.parse(request.body)

    await prisma.delivery.update({
      data: {
        status,
      },
      where: {                             // usando o prisma para dizer o que queremos atualizar.
        id,
      },
    })

    await prisma.deliveryLog.create({        // criando um log quando o status do pedido mudar.
      data: {
        deliveryId: id,
        description: status,
      }
    })

    return reponse.json()
  }
}

export { DeliveriesStatusController }