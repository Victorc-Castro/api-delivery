import { Request, Response } from "express"

class DeliveryLogsController {  // método para adicionar informações sobre os envios.
  async create(resquest: Request, response: Response) {
    return response.json({ message: "ok" })
  }
}

export { DeliveryLogsController }