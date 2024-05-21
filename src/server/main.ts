import express from "express";
import ViteExpress from "vite-express";
import { Client } from 'pg';

const app = express();

const client = new Client({
  user: "products_zcbp_user",
  host: "dpg-cp6l2pev3ddc73fm873g-a",
  database: "postgres://products_zcbp_user:VGm8UmhXttHj4yEjLt4QZiiT0O7pKaeX@dpg-cp6l2pev3ddc73fm873g-a/products_zcbp",
  password: "VGm8UmhXttHj4yEjLt4QZiiT0O7pKaeX",
  port: 5432,
});

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
})

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
