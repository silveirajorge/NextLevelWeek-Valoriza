import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database"

const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

 app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running"));
