import request from "supertest";
import prismaClient from "@/shared/infra/prisma/prismaClient";
import { server, app } from "@/shared/infra/http/server";

describe("User Controller", () => {
  afterAll(async () => {
    await prismaClient.usuario.deleteMany({
    await prismaClient.$disconnect();
    server.close();
  });

  it("should create a new user", async () => {
    const res = await request(app)
      .post("/user/createUser")
      .send({ codigoUsuario: "123abc", nome: "Joederson" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message");
  });

  it("should get a user by codigoUsuario", async () => {
    const usuario = await prismaClient.usuario.findFirst({
      where: { nome: "Joederson" },
    });

    const res = await request(app).get(
      `/user/getUserByCodigoUsuario/${usuario?.codigoUsuario}`
    );

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("codigoUsuario");
    expect(res.body).toHaveProperty("horariosEntradaSaida");
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("nome");
  });
});
