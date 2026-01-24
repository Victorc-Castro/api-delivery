import { Router } from "express"

import { DeliveriesController } from "@/controllers/deliveries-controller"

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated" // importação da autenticação que criei. 

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(ensureAuthenticated)  // passando a autenticação para a rota.
deliveriesRoutes.post("/", deliveriesController.create)

export { deliveriesRoutes }