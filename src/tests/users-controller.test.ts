import request from "supertest" // importação do "supertest" para fazer os testes.

import { app } from "@/app"  // importação do onde estão as rotas.

describe("UsersController", () => {  // teste para criação de novos usuários.
  it("should create a new user sucessfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "testuser@email.com",
      password: "password123",
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
    expect(response.body.name).toBe("Test User")
  })
})