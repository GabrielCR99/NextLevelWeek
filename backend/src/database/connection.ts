import knex from "knex";
import path from "path";

const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default connection;

// * MIGRATIONS -> histórico do BD. Coloca o que precisa ser feito quando aquela versão do software for executada
