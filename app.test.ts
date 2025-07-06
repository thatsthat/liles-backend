import app from "./app";

const request = require("supertest");
const express = require("express");
const testApp = express();
import { beforeAll, test, expect } from "vitest";

testApp.use(express.urlencoded({ extended: false }));
testApp.use("/", app);

var token = "";

beforeAll(async () => {
  const response = await request(testApp)
    .post("/login")
    .set("Content-Type", "application/json")
    .send({
      email: "a@b.com",
      password: "12345",
    });
  token = response.body.token;
});

test.skip("Llista de d'actuacions", async () => {
  const res = await request(testApp)
    .get("/private/llista-actuacions")
    .auth(token, { type: "bearer" })
    .set("Content-Type", "application/json");
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toHaveLength(816);
});

test.skip("Llista de castells", async () => {
  const res = await request(testApp)
    .get("/private/llista-castells")
    .auth(token, { type: "bearer" })
    .set("Content-Type", "application/json");
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toHaveLength(4236);
});

test.skip("Llista de temporades", async () => {
  const res = await request(testApp)
    .get("/private/llista-temporades")
    .auth(token, { type: "bearer" })
    .set("Content-Type", "application/json");
  console.log(res.body);
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toHaveLength(35);
});

test("Actuacions per temporada", async () => {
  const res = await request(testApp)
    .get("/private/actuacions-temporada/10")
    .auth(token, { type: "bearer" })
    .set("Content-Type", "application/json");
  console.log(res.body[0]);
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toHaveLength(34);
});

test.skip("Resultats de castells", async () => {
  const res = await request(testApp)
    .get("/private/resultats-castells/")
    .auth(token, { type: "bearer" })
    .set("Content-Type", "application/json");
  console.log(res.body);
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toHaveLength(10);
});

test.skip("Afegeix un castell", async () => {
  const castell = {
    nom: "3de7",
    resultat: "Descarregat",
    actuacioId: 10,
  };
  const res = await request(testApp)
    .post("/private")
    .auth(token, { type: "bearer" })
    .set("Content-Type", "application/json")
    .send(castell);
  console.log(res.body);
  expect(res.statusCode).toBe(200);
  expect(res.body).toMatchObject(castell);
});
