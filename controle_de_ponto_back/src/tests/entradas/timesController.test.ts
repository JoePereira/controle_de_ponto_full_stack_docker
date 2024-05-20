import request from "supertest";
import prismaClient from "@/shared/infra/prisma/prismaClient";
import { app, server } from "@/shared/infra/http/server";

describe("Times Controller", () => {
  beforeAll(async () => {
    await prismaClient.usuario.create({
      data: {
        nome: "Joederson",
        codigoUsuario: "1625HJS",
      },
    });
  });

  afterAll(async () => {
    const newUser = await prismaClient.usuario.findFirst({
      where: { nome: "Joederson" },
    });
    if (newUser) {
      await prismaClient.horarios.deleteMany({
        where: {
          usuarioId: newUser?.id,
        },
      });
    }
    await prismaClient.usuario.deleteMany({
      where: {
        nome: "Joederson",
      },
    });

    await prismaClient.$disconnect();
    server.close();
  });

  it("should create a new entry time", async () => {
    const newUser = await prismaClient.usuario.create({
      data: {
        nome: "Joederson",
        codigoUsuario: "1625HJS",
      },
    });
    const res = await request(app)
      .post("/times/createEntry")
      .send({ usuarioId: newUser.id });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message");
  });

  it("should create a new exit time", async () => {
    const newUser = await prismaClient.usuario.findFirst({
      where: { nome: "Joederson" },
    });
    const res = await request(app)
      .post("/times/createExit")
      .send({ usuarioId: newUser?.id });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message");
  });

  it("should get all entry times by usuarioId", async () => {
    const usuario = await prismaClient.usuario.findFirst({
      where: { nome: "Joederson" },
    });

    const res = await request(app).get(
      `/times/getAllEntryTimesByUsuarioId/${usuario?.id}&6&1`
    );

    expect(res.status).toBe(200);
  });

  it("should get all exits times by usuarioId", async () => {
    const usuario = await prismaClient.usuario.findFirst({
      where: { nome: "Joederson" },
    });

    const res = await request(app).get(
      `/times/getAllExitTimesByUsuarioId/${usuario?.id}&6&0`
    );

    expect(res.status).toBe(200);
  });
});
