import request from "supertest";
import express from "express";
import nocache from "nocache";
import { beforeAll, test, expect } from "vitest";
import autenticacioR from "./routes/autenticacio";
import temporadaR from "./routes/temporada";
import actuacioR from "./routes/actuacio";
import castellR from "./routes/castell";
import fotoR from "./routes/foto";

const testApp = express();
testApp.use(express.json());
testApp.use(express.urlencoded({ extended: false }));
//testApp.use(nocache());
//testApp.set("etag", false);
testApp.use("/", autenticacioR);
testApp.use("/temporada", temporadaR);
testApp.use("/actuacio", actuacioR);
testApp.use("/castell", castellR);
testApp.use("/foto", fotoR);

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

test.skip("Login", async () => {
  const res = await request(testApp)
    .post("/login")
    .set("Content-Type", "application/json")
    .send({
      email: "a@b.com",
      password: "12345",
    });
  console.log(res);
  expect(res.statusCode).toBe(200);
});

for (let i = 0; i < 10; i++) {
  test("Race Condition" /* {
    timeout: 30000,
  }, */, async () => {
    // Crea objecte foto
    const res = await request(testApp)
      .post("/foto")
      .auth(token, { type: "bearer" })
      .field("collaId", 17)
      .field("actuacioId", 1)
      .attach("avatar", "./olesa4.jpg");
    // Llegeix dades actuacio corresponent a la foto
    //await new Promise((r) => setTimeout(r, 1000));
    const res2 = await request(testApp)
      .get("/actuacio/1")
      .auth(token, { type: "bearer" })
      .field("collaId", 17)
      .field("actuacioId", 1)
      .attach("avatar", "./olesa4.jpg");
    console.log(res2.body.fotos.length);
    expect(res.statusCode).toBe(200);
  });
}
