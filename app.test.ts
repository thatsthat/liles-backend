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

test("Llista de d'actuacions", async () => {
  const res = await request(testApp)
    .get("/private/llista-actuacions")
    .auth(token, { type: "bearer" })
    .set("Content-Type", "application/json");
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toHaveLength(816);
});

test("Llista de castells", async () => {
  const res = await request(testApp)
    .get("/private/llista-castells")
    .auth(token, { type: "bearer" })
    .set("Content-Type", "application/json");
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toHaveLength(4236);
});

test("Llista de temporades", async () => {
  const res = await request(testApp)
    .get("/private/llista-temporades")
    .auth(token, { type: "bearer" })
    .set("Content-Type", "application/json");
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toHaveLength(34);
});
