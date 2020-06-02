import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

const app = express();

app.use(cors());

// * Coloca um plugin no express, ou seja, ele entende o formato da requisição como JSON
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

// * Rota -> é o endereço completo da requisição. É muito semântica
// * Recurso -> qual a entidade da sessão; do sistema
// ! NÃO há problema a rota ser igual, contanto que os métodos sejam diferentes.

// * GET -> é o "padrão" de todo navegador para buscar algo. i.e: http://localhost:3333/items
// * POST -> cria um nova info no backend
// * PUT -> atualiza uma info que já existe no backend
// * DELETE -> remove uma info do backend

// * Request Params -> vem escrito na própria rota. Sua função é identificar um recurso
// * Query Params -> parâmetros opcionais. Geralmente são para filtros, paginação, etc. i.e: http://localhost:3333/points/?city=Campinas&uf=SP&items=6
// * Request Body -> corpo da requisição. Parametros para criação e atualização. Nesse caso, o body é em JSON

app.listen(3333);
