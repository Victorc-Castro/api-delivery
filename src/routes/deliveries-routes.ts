import { Router } from "express"

import { DeliveriesController } from "@/controllers/deliveries-controller"
import { DeliveriesStatusController } from "@/controllers/deliveries-status-controller"  // importando o controller de atualização.

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated" // importação da autenticação que criei. 
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization" // importação da função de verificação na rota.

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()
const deliveriesStatusController = new DeliveriesStatusController() // instânciando a classe de atualização de status.

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]))  // passando a autenticação para a rota.
deliveriesRoutes.post("/", deliveriesController.create)
deliveriesRoutes.get("/", deliveriesController.index) // rota para listar pedidos.

deliveriesRoutes.patch("/:id/status", deliveriesStatusController.update)  // rota para atualizar o status.

export { deliveriesRoutes }