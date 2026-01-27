import request from "supertest" // importação do "supertest" para fazer os testes.
import { prisma } from "@/database/prisma"  // importação do prisma para conexão com o banco de dados.

import { app } from "@/app"  // importação do onde estão as rotas.

describe("UsersController", () => {  // teste para criação de novos usuários.
  let user_id: string  // variável para pegar o id do usuário criado.  

  afterAll(async () => {  
    await prisma.user.delete({ where: { id: user_id } })  // método para deleter o usuário criado pelo teste após fazer o teste.
  })

  it("should create a new user sucessfully", async () => {   // teste de criação de um novo usuário.
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "testuser@email.com",                 // campos necessários para a criação de um usuário.
      password: "password123",
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")              // expectativa do que dever ser retornado ao fazer os testes.
    expect(response.body.name).toBe("Test User")

    user_id = response.body.id  // aqui pego o id do "user" criado e passo ele para a variável no começo do método.
  })

  it("should throw an error ir user with smae email already exists", async () => {  // teste de email já existente.
    const response = await request(app).post("/users").send({
      name: "Duplicate User",
      email: "testuser@email.com",          // campos que serão criados para validar se determinado email já existe.   
      password: "password123",
    })

    expect(response.status).toBe(400)       // expectativa do que dever ser retornado ao fazer os testes.
    expect(response.body.message).toBe("User with same email already exists")
  })

  it("should throw a validation error if email is invalid", async () => {  // método para testar se o email é válido para cadastro.
    const response = await request(app).post("/users").send({ 
      name: "Test User",
      email: "invalid-email",          // campos necessários para fazer o teste (campo e-mail é inválido para teste de exceção).
      password: "password123"
    })

    expect(response.status).toBe(400)                           // expectativa do que dever ser retornado ao fazer os testes.        
    expect(response.body.message).toBe("validation error")
  })
})