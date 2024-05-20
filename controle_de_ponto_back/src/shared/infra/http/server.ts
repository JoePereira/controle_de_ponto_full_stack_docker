import "reflect-metadata";
import express, { json } from "express";
import "../../container";
import cors from "cors";

import { router } from "./routes/index.routes";

const app = express();
const port = process.env.PORT || 3300;

app.use(cors());
app.use(json());
app.use(router);

const server = app.listen(port, () => {
  console.log(`🎈🎈Example app listening at ${port}🎈🎈`);
});

export { app, server };
