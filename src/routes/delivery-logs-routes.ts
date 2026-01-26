import { Router } from "express";

import { DeliveryLogsController } from "@/controllers/delivery-logs-controller";  // importação do controller.

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";           // importação da autorização.
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";  // importação da verificação.

const deliveryLogsRoutes = Router()
const deliveryLogsController = new DeliveryLogsController()

deliveryLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),   // rota para controller que gerencia os logs.
  deliveryLogsController.create
)

deliveryLogsRoutes.get(
  "/:delivery_id/show",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "costumer"]),    // rota para controller que exibe detalhes do pedido.
  deliveryLogsController.show
)

export { deliveryLogsRoutes }