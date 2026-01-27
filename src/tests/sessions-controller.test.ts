import request from "supertest"  // importação do supertest.

import { app } from "@/app"   // importação do onde estão as rotas.

describe("SessionsController", () => {  // método para teste de sessão.
  let user_id: string 

  it("should authenticate a and get acess token", async () => {      // usuário criado para teste de sessão.
    const userResponse = await request(app).post("/users").send({
      name: "Auth Test User",
      email: "auth_test_user@email.com",                 
      password: "password123",
    })

    user_id = userResponse.body.id

    const sessionResponse = await request(app).post("/sessions").send({  // envio dos dados de início de sessão.
      email: "auth_test_user@email.com",
      password: "password123"
    })

    expect(sessionResponse.status).toBe(200)          // expectativa do que dever ser retornado ao fazer os testes.
    expect(sessionResponse.body.token).toEqual(expect.any(String))
  })
})