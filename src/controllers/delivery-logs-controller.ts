import { Request, Response } from "express"
import { AppError } from "@/utils/AppError"  // importação do erro para verificação.
import { prisma } from "@/database/prisma"        // importação do banco de dados.
import { z } from "zod"                        // importação do zod para validações.

class DeliveryLogsController {                             
  async create(resquest: Request, response: Response) {  // método para adicionar informações sobre os envios.
    const bodySchema = z.object({  
      delivery_id: z.string().uuid(),                     // validação do que é necessário para o log.
      description: z.string()
    })

    const { delivery_id, description } = bodySchema.parse(resquest.body)

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id }                         // buscando o id no banco de dados.
    })

    if(!delivery){
      throw new AppError("delivery not found", 404)     // validação de se o pedido existe.
    }

    if(delivery.status === "processing"){
      throw new AppError("change status to shipped")   // validação de se o status ainda está como "procesing", pois o pedido precisa ser enviado para o log.
    }

    await prisma.deliveryLog.create({
      data: {
        deliveryId: delivery_id,                     // criando o método para o log.
        description
      }
    })

    return response.status(201).json()
  }

  async show(request: Request, response: Response){  // método para exibir detalhes dos pedidos.
    const paramsSchema = z.object({                     // validação do que vou receber (id da entrega).
      delivery_id: z.string().uuid(),
    })

    const { delivery_id } = paramsSchema.parse(request.params)

    const delivery = await prisma.delivery.findUnique({   // buscando no banco de dados através do id da entrega.
      where: { id: delivery_id },
    })

    if (
      request.user?.role === "costumer" && request.user.id !== delivery?.userId  // verificando se o pedido pertence ao usuário. 
    ) { 
      throw new AppError("the user can only view their deliveries", 401)
    }

    return response.json(delivery)
  }
}

export { DeliveryLogsController }